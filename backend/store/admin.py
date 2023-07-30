from django.contrib import admin
from .models import Category, Product, Review, Order, OrderItem

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'contributor', 'price', 'is_active')
    search_fields = ('name', 'contributor__user__username', 'category__name')

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product', 'user', 'name', 'rating', 'createdAt')
    search_fields = ('product', 'user', 'name', 'rating', 'createdAt')

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0

class OrderAdmin(admin.ModelAdmin):
    list_display = ('customer', 'total_price', 'is_completed')
    search_fields = ('client__username',)
    inlines = [OrderItemInline]

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('product', 'order',  'price')
    search_fields = ('product__name', 'order__client__username')

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
