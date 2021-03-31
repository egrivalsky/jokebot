from .views import index
from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('', index),  # for the empty url
    re_path(r'^.*/$', index)  # this is awesome
]