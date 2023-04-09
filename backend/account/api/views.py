from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from account.models import Account
from .serializers import AccountSerializer
from rest_framework import status
from django.conf import settings
from account.models import Account
from django_pesapal.models import Transaction
from next_store.settings import PESAPAL_CONSUMER_KEY, PESAPAL_CONSUMER_SECRET, PESAPAL_DEMO


class AccountAPIView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class DepositView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        serializer = AccountSerializer(request.user.account)
        amount = request.data['amount']

        try:
            # Create a transaction using PesaPal
            pesapal_transaction = Transaction.objects.create_transaction(
                user=request.user,
                amount=amount,
                reference='DEPOSIT',
                email=request.user.email,
                consumer_key=PESAPAL_CONSUMER_KEY,
                consumer_secret=PESAPAL_CONSUMER_SECRET,
                is_demo=PESAPAL_DEMO
            )

            # Return the payment URL to the user
            payment_url = pesapal_transaction.payment_url()
            return Response({'payment_url': payment_url}, status=status.HTTP_200_OK)

        except Exception as e:
            # If the transaction fails, return the error message
            return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class WithdrawalView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        serializer = AccountSerializer(request.user.account)
        amount = request.data['amount']

        try:
            # Check if the user has sufficient funds in their account
            account = request.user.account
            if account.balance < amount:
                return Response({'message': 'Insufficient funds'}, status=status.HTTP_400_BAD_REQUEST)

            # Create a transaction using PesaPal
            pesapal_transaction = PesapalTransaction.objects.create_transaction(
                user=request.user,
                amount=amount,
                reference='WITHDRAWAL',
                email=request.user.email,
                consumer_key=PESAPAL_CONSUMER_KEY,
                consumer_secret=PESAPAL_CONSUMER_SECRET,
                is_demo=PESAPAL_DEMO
            )

            # Update the user's account balance
            account.balance -= amount
            account.save()

            # Return the payment URL to the user
            payment_url = pesapal_transaction.payment_url()
            return Response({'payment_url': payment_url}, status=status.HTTP_200_OK)

        except Exception as e:
            # If the transaction fails, return the error message
            return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
