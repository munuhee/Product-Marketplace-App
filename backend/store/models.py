from django.db import models


PRICING_CHOICES = (
    ("FREE", "FREE"),
    ("PRO", "PRO")
)

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    pricing_plan = models.CharField(max_length=10, choices=PRICING_CHOICES)
    image = models.ImageField(upload_to='products/')
    category = models.ForeignKey(Category, on_delete=models.PROTECT)

    def __str__(self):
        return self.name
