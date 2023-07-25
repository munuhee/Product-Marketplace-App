from django.urls import path
from .views import (ProfileList, ProfileView, ProfileEdit, ProfileDetails, ProfileDelete)

urlpatterns = [
    path('profiles/', ProfileList.as_view(), name='profiles'),
    path('profile/edit', ProfileEdit.as_view(), name='profile-edit'),
    path('profile/<int:pk>/', ProfileDetails().as_view(), name='profile-details'),
    path('profiles/<int:pk>/delete', ProfileEdit.as_view(), name='profile-delete'),
    path('profile/', ProfileView.as_view(), name='profile'),
]

