from django.shortcuts import get_object_or_404
from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView)
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from datetime import datetime

from store.models import Product, Order, OrderItem
from .serializers import OrderSerializer


class AddOrderItemsView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        customer = request.user
        data = request.data
        order_items = data.get('orderItems', [])
        if not order_items:
            return Response({'detail': 'No Order Items'},
                            status=status.HTTP_400_BAD_REQUEST)
        else:
            order = Order.objects.create(
                user=user,
                paymentMethod=data.get('paymentMethod'),
                taxPrice=data.get('taxPrice'),
                shippingPrice=data.get('shippingPrice'),
                totalPrice=data.get('totalPrice')
            )
            for item_data in order_items:
                product = get_object_or_404(Product, pk=item_data.get('product'))
                item = OrderItem.objects.create(
                    product=product,
                    order=order,
                    name=product.name,
                    price=item_data.get('price'),
                    image=product.image.url,
                )
            serializer = self.get_serializer(order)
            return Response(serializer.data)


class GetOrderByIdView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, pk=None):
        user = request.user
        order = get_object_or_404(Order, pk=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order)
            return Response(serializer.data)
        else:
            return Response({
                'detail': 'Not authorized to view this order'
            }, status=status.HTTP_400_BAD_REQUEST)


class UpdateOrderToPaidView(UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def update(self, request, pk=None):
        order = get_object_or_404(Order, pk=pk)
        order.isPaid = True
        order.paidAt = datetime.now()
        order.save()
        return Response('Order was paid')


class GetMyOrdersView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer

    def get_queryset(self):
        customer = self.request.user
        return Order.objects.filter(user=customer)


class GetOrdersView(ListAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = OrderSerializer
    queryset = Order.objects.all()