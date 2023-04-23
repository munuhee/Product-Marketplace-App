from django.contrib import admin
from .models import Contributor
# Register your models here.
class ContributorAdmin(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name', 'phone_number', 'verified')
    search_fields = ('user', 'first_name', 'last_name', 'phone_number', 'verified')

admin.site.register(Contributor, ContributorAdmin)
