from django.shortcuts import render
from blog.models import Article
import json
from django.core import serializers

def home(request):
    return render(request,"index.html")

def article(request):
    
    data = serializers.serialize('json', Article.objects.all(), use_natural_foreign_keys=True)
    return HttpResponse(data, content_type="application/json")