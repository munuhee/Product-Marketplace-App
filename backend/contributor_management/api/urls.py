from .views import ContributorAPIView
from django.urls import path

app_name = "contributor_management"

urlpatterns = [
    path('api/contributors', ContributorAPIView.as_view(), name='contributors')
]