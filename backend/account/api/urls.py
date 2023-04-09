from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (AccountAPIView,
                    DepositView, WithdrawalView)

app_name = "account"

urlpatterns = [
    path('account/', AccountAPIView.as_view(), name='account_detail'),
    path('deposit/', DepositView.as_view(), name='deposit'),
    path('withdrawal/', WithdrawalView.as_view(), name='withdrawal'),
]
