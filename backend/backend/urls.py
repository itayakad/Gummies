from django.http import JsonResponse
from django.contrib import admin
from django.urls import path, include

def root_view(request):
    return JsonResponse({"message": "Welcome to the Gummies Backend!"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', root_view),  # Root path mapped to a custom view
]
