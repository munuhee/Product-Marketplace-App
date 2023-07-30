import os
from django.db import models
from contributor_management.models import Contributor
from users.models import CustomUser
from PIL import Image
from io import BytesIO
from django.core.files import File
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    contributor = models.ForeignKey(Contributor, on_delete=models.CASCADE)
    category = models.ManyToManyField(Category)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=4, decimal_places=2)
    image = models.ImageField(upload_to='products/')
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        img = Image.open(self.image)
        target_ratio = 8 / 5
        width, height = img.size
        current_ratio = width / height

        if current_ratio != target_ratio:
            if current_ratio < target_ratio:
                new_width = int(height * target_ratio)
                new_height = height
            else:
                new_width = width
                new_height = int(width / target_ratio)

            new_img = Image.new('RGB', (new_width, new_height), color='white')

            paste_x = (new_width - width) // 2
            paste_y = (new_height - height) // 2

            new_img.paste(img, (paste_x, paste_y))

            modified_image_filename = f"{slugify(self.name)}_{self.pk}_modified.jpg"

            buffer = BytesIO()
            new_img.save(buffer, format='JPEG')
            self.image.save(modified_image_filename, File(buffer), save=False)

        super().save(*args, **kwargs)


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    products = models.ManyToManyField(Product, through='OrderItem')
    total_price = models.DecimalField(max_digits=4, decimal_places=2)
    createdAt = models.DateTimeField(auto_now_add=True)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return f'Order #{self.pk}'


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.quantity}x {self.product.name} ({self.order})'
