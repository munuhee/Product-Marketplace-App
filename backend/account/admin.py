from django.contrib import admin
from .models import Wallet

class WalletAdmin(admin.ModelAdmin):
    list_display = ('user', 'balance', 'last_updated')
    search_fields = ('user__username', 'user__first_name', 'user__last_name')

admin.site.register(Wallet, WalletAdmin)
