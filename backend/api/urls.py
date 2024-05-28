from django.urls import path, include
from rest_framework import routers
from .views import TodolistView

router = routers.DefaultRouter()
router.register(r'todolist', TodolistView)

urlpatterns = [
    path('api/', include(router.urls))
]