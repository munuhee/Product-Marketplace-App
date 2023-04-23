from django.urls import path
from .views import (CategoryList, ProductList,
                    ProductDetail,ProductEdit,
                    ProductCreate, OrderList,
                    OrderDetail, PaymentView)

urlpatterns = [
    path('categories/', CategoryList.as_view(), name='categories'),
    path('products/', ProductList.as_view(), name='products'),
    path('product-create/', ProductCreate.as_view(), name='product-create'),
    path('products/<int:pk>/edit', ProductEdit.as_view(), name='product-edit'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product'),
    path('orders/', OrderList.as_view(), name='orders'),
    path('orders/<int:pk>/', OrderDetail.as_view(), name='order'),
    path('payment/', PaymentView.as_view(), name='payment'),
]
