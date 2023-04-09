from rest_framework.permissions import IsAuthenticated
from .serializers import VendorSerializer
from rest_framework import generics
from vendor_management.models import Vendor

class VendorAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer

