from django.db import models
from django.conf import settings
from paypal.standard.forms import PayPalPaymentsForm


class Subscription(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    plan = models.CharField(max_length=50)
    period = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.plan} subscription for {self.user.username}"

    def paypal_form(self, return_url, cancel_url):
        """
        Returns a PayPalPaymentsForm instance for processing the subscription payment.
        """
        paypal_dict = {
            "business": settings.PAYPAL_RECEIVER_EMAIL,
            "amount": str(self.price),
            "item_name": f"{self.plan} subscription",
            "invoice": str(self.id),
            "notify_url": f"{settings.SITE_URL}/paypal-ipn/",
            "return_url": return_url,
            "cancel_return": cancel_url,
            "custom": f"{self.id}|{self.user.pk}",
            "no_shipping": "1",
            "currency_code": "USD",
        }
        form = PayPalPaymentsForm(initial=paypal_dict)
        return form
