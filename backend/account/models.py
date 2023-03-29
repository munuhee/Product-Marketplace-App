from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager, User




class CaseInsensitiveUserManager(UserManager):
    def get_by_natural_key(self, username):
        return self.get(username__iexact=username)

    def create_user(self, username, email=None, password=None, **extra_fields):
        username = username.lower()
        return super().create_user(username, email, password, **extra_fields)

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        username = username.lower()
        return super().create_superuser(username, email, password, **extra_fields)


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    last_updated = models.DateTimeField(auto_now=True)


class Vendor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.company_name
