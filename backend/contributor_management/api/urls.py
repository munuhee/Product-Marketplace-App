from .views import ContributorAPIView,  ContributorCreate, ContributorUpdate, ContributorDetail, ContributorDestroy
from django.urls import path

app_name = "contributor_management"

urlpatterns = [
    path('contributors', ContributorAPIView.as_view(), name='contributors'),
    path('contributor-create/', ContributorCreate.as_view(), name='contributor-create'),
    path('contributors/<int:pk>/update', ContributorUpdate.as_view(), name='contributor-edit'),
    path('contributors/<int:pk>/delete', ContributorDestroy.as_view(), name='contributor-delete'),
    path('contributors/<int:pk>/', ContributorDetail.as_view(), name='contributor'),
]