from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/', include('account.api.urls')),
    path('api/authentication/', include('authentication.api.urls')),
    path('api/contributormanagement/', include('contributor_management.api.urls')),
    path('api/store/', include('store.api.urls')),
    path('api/users/', include('users.api.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
