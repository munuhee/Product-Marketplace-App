from django.urls import path
from .views import (CategoryList, CategoryDetail, CategoryEdit, ProductList,
                    ProductDetail,ProductEdit,
                    ProductCreate, OrderList,
                    OrderDetail, PaymentView)
from .orderViews import (AddOrderItemsView, GetOrderByIdView,
                    UpdateOrderToPaidView, GetMyOrdersView,
                    GetOrdersView)

urlpatterns = [
    path('categories/', CategoryList.as_view(), name='categories'),
    path('categories/<int:pk>/edit', CategoryEdit.as_view(), name='category-edit'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category'),
    path('products/', ProductList.as_view(), name='products'),
    path('product-create/', ProductCreate.as_view(), name='product-create'),
    path('products/<int:pk>/edit', ProductEdit.as_view(), name='product-edit'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product'),
    path('payment/', PaymentView.as_view(), name='payment'),

    path('orders/', GetOrdersView.as_view(), name='orders'),
    path('orders/add/', AddOrderItemsView.as_view(), name='orders-add'),
    path('orders/myorders/', GetMyOrdersView.as_view(), name='myorders'),
    path('orders/<int:pk>/',  GetOrderByIdView.as_view(), name='user-order'),
    path('orders/<int:pk>/pay/', UpdateOrderToPaidView.as_view(), name='pay'),
]
