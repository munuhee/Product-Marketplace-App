from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from store.models import Category, Product, Order, OrderItem
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from paypalrestsdk import configure, Payment
from decimal import Decimal
from account.models import Wallet
from django.conf import settings




class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryCreate(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]


class CategoryDetail(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

class ProductList(generics.ListAPIView):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer

class ProductCreate(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductSerializer


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        obj = super().get_object()
        if obj.contributor.user != self.request.user:
            self.permission_denied(self.request)
        return obj


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def get_object(self):
        obj = super().get_object()
        if obj.customer.user != self.request.user:
            self.permission_denied(self.request)
        return obj

class PaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Retrieve cart items for the logged-in user
        order = Order.objects.filter(customer=request.user, is_completed=False).first()
        if not order:
            return Response({'detail': 'No pending order found for the user'}, status=status.HTTP_404_NOT_FOUND)

        # Calculate total price
        total_price = Decimal(0)
        for order_item in order.order_items.all():
            total_price += order_item.quantity * order_item.product.price

        # Create PayPal payment request
        configure({
            'mode': settings.PAYPAL_MODE,
            'client_id': settings.PAYPAL_CLIENT_ID,
            'client_secret': settings.PAYPAL_CLIENT_SECRET
        })
        paypal_client = Payment({
            'intent': 'sale',
            'payer': {
                'payment_method': 'paypal'
            },
            'redirect_urls': {
                'return_url': 'http://localhost:3000/payment/execute',
                'cancel_url': 'http://localhost:3000/'
            },
            'transactions': [{
                'amount': {
                    'total': str(total_price),
                    'currency': 'USD',
                },
                'description': 'Payment for order #{}'.format(order.id)
            }]
        })

        if paypal_client.create():
            # Redirect user to PayPal for payment
            for link in paypal_client.links:
                if link.rel == 'approval_url':
                    return Response({'redirect_url': link.href})
        else:
            return Response({'detail': 'Failed to create PayPal payment: {}'.format(paypal_client.error)}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        # Handle PayPal callback after successful payment
        payment_id = request.GET.get('paymentId')
        payer_id = request.GET.get('PayerID')

        # Retrieve payment details from PayPal
        configure({
            'mode': 'sandbox' if settings.PAYPAL_MODE else 'live',
            'client_id': settings.PAYPAL_CLIENT_ID,
            'client_secret': settings.PAYPAL_CLIENT_SECRET
        })
        paypal_client = Payment.find(payment_id)
        if paypal_client.execute({'payer_id': payer_id}):
            # Update contributor's wallet balance
            order = Order.objects.filter(customer=request.user, is_completed=False).first()
            for order_item in order.order_items.all():
                contributor_wallet = Wallet.objects.get(user=order_item.product.contributor)
                contributor_wallet.balance += order_item.quantity * order_item.product.price
                contributor_wallet.save()

            # Mark order as completed
            order.is_completed = True
            order.save()

            return Response({'detail': 'Payment successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Failed to execute PayPal payment: {}'.format(paypal_client.error)}, status=status.HTTP_400_BAD_REQUEST)