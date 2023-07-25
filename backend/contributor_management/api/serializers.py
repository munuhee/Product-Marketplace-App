from contributor_management.models import Contributor
from rest_framework import serializers

class ContributorSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    class Meta:
        model = Contributor
        fields = ('user', 'first_name', 'last_name', 'phone_number', 'verified')