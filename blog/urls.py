from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.home),
    url(r'^api/blog/(?P<id>[0-9]{1,})/$',views.article),
    url(r'^api/article_list/$',views.article_list),
    url(r'^home/$',views.home),
    url(r'^article/$',views.home),
    url(r'^article/[0-9]{1,}$',views.home),
]