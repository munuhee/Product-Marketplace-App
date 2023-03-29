from django.urls import path
from .views import DepositView, WithdrawalView, AccountAPIView, VendorAPIView

app_name = "account"

urlpatterns = [
    path('deposit/', DepositView.as_view(), name='deposit'),
    path('withdraw/', WithdrawalView.as_view(), name='withdraw'),
    path('account/', AccountAPIView.as_view(), name='account'),
    path('vendor/', VendorAPIView.as_view(), name='vendor'),
]
