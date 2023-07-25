from django.db import models
from users.models import CustomUser
from django.db import models

class Contributor(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
