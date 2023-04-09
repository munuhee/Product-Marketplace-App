from .views import VendorAPIView
from django.urls import path

app_name = "vendor_management"

urlpatterns = [
    path('api/vendors', VendorAPIView.as_view(), name='vendors')
]