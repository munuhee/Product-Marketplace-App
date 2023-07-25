from django.db import models
from users.models import CustomUser

class Wallet(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    last_updated = models.DateTimeField(auto_now=True)