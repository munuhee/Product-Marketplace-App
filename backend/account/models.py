from django.db import models
from django.contrib.auth.models import User

class Wallet(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    last_updated = models.DateTimeField(auto_now=True)