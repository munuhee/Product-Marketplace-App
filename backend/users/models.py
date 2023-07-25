from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

class CaseInsensitiveUserManager(UserManager):
    def get_by_natural_key(self, username):
        return self.get(username__iexact=username)

    def create_user(self, username, email=None, password=None, **extra_fields):
        username = username.lower()
        return super().create_user(username, email, password, **extra_fields)

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        username = username.lower()
        return super().create_superuser(username, email, password, **extra_fields)

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username

    objects = CaseInsensitiveUserManager()


class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    profile_picture = models.ImageField(default='profile_pics/default.jpg', upload_to='profile_pics')
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    date_created = models.DateField(auto_now=True)


    def __str__(self):
        return f'{self.user.username} Profile'
