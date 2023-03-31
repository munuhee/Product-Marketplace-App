from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (AccountAPIView, VendorAPIView, CustomAuthToken,
                    DepositView, WithdrawalView, MyTokenObtainPairView)

urlpatterns = [
    path('api/token/', CustomAuthToken.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/account/', AccountAPIView.as_view(), name='account_detail'),
    path('api/vendors/', VendorAPIView.as_view(), name='vendor_list'),
    path('api/deposit/', DepositView.as_view(), name='deposit'),
    path('api/withdrawal/', WithdrawalView.as_view(), name='withdrawal'),
    path('api/token/obtain/', MyTokenObtainPairView.as_view(), name='my_token_obtain_pair'),
]
