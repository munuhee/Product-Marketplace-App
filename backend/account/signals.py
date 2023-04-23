from django.db.models.signals import post_save
from django.dispatch import receiver
from contributor_management.models import Contributor
from .models import Wallet


@receiver(post_save, sender=Contributor)
def create_or_update_wallet(sender, instance, created, **kwargs):
    if created:
        Wallet.objects.create(user=instance.user)  # Pass User instance to user field
    else:
        instance.wallet.save()
