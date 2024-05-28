from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodolistSerilizer
from .models import Todolist

# Create your views here.
class TodolistView(viewsets.ModelViewSet):
    queryset = Todolist.objects.all()
    serializer_class = TodolistSerilizer
