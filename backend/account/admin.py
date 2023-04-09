from django.contrib import admin
from .models import Account

class AccountAdmin(admin.ModelAdmin):
    list_display = ('user', 'balance', 'last_updated')
    search_fields = ('user__username', 'user__first_name', 'user__last_name')

admin.site.register(Account, AccountAdmin)
