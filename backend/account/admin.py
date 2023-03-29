from django.contrib import admin
from .models import Account, Vendor

class AccountAdmin(admin.ModelAdmin):
    list_display = ('user', 'balance', 'last_updated')
    search_fields = ('user__username', 'user__first_name', 'user__last_name')

class VendorAdmin(admin.ModelAdmin):
    list_display = ('user', 'account', 'is_active')
    search_fields = ('user__username', 'user__first_name', 'user__last_name')

admin.site.register(Account, AccountAdmin)
admin.site.register(Vendor, VendorAdmin)
