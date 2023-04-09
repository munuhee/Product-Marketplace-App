from vendor_management.models import Vendor
from rest_framework import serializers

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ('user', 'first_name', 'last_name', 'phone_number', 'verified')