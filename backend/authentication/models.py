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

