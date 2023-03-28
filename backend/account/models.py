from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)



class Vendor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.company_name
