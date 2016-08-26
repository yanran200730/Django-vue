from django.db import models
from django.utils import timezone

class User(models.Model):
    username = models.CharField("User's name ", max_length=50)
    passwd = models.CharField("User's password ", max_length=50)
    email = models.EmailField("User's email address ", max_length=50)
    date = models.DateTimeField(default=timezone.now)
            
    def __str__(self):
        return self.username


class Article(models.Model):
    author = models.ForeignKey(User)
    content = models.TextField('文章')
    tag = models.CharField("标签",max_length=10)
    title = models.CharField("标题",max_length=20)
    date_time = models.DateTimeField(default=timezone.now)
    view_count = models.IntegerField("浏览次数",default=0)

    def __str__(self):
        return self.author.username

    class Meta:
        ordering = ["-date_time"]
        