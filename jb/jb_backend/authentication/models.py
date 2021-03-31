from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class CustomUser(AbstractUser):
    twitter_handle = models.CharField(max_length=50, blank=True)
    twitter_pw = models.CharField(max_length=50, blank=True)

