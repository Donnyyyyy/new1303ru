from django.conf.urls import url
from mainpage import views

urlpatterns = [
    url(r'^$', views.index),
]
