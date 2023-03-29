from rest_framework import serializers
from account.models import Account, Vendor


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('balance',)

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ('user', 'profile', 'is_active')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        return data
