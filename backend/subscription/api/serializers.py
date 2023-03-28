from rest_framework import serializers
from .models import Subscription


class SubscriptionSerializer(serializers.ModelSerializer):
    paypal_form_url = serializers.SerializerMethodField()

    class Meta:
        model = Subscription
        fields = ('id', 'user', 'created_at', 'plan', 'period', 'price', 'paypal_form_url')

    def get_paypal_form_url(self, obj):
        """
        Returns the PayPal form URL for processing the subscription payment.
        """
        return obj.paypal_form(return_url='http://example.com/success', cancel_url='http://example.com/cancel').get_submit_url()
