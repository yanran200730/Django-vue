from django.shortcuts import render,HttpResponse
from blog.models import Article
import json
from django.core import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .serializers import ArticleSerializer

def home(request):
    return render(request,"index.html")

# def article(request):
#     data = serializers.serialize('json', Article.objects.all(), use_natural_foreign_keys=True)
#     response = HttpResponse(data,content_type="application/json")
#     response['Access-Control-Allow-Origin'] = '*'
#     return response

class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def article(request):
    article = Article.objects.all()
    serializer = ArticleSerializer(article, many=True)
    response = JSONResponse(serializer.data)
    response['Access-Control-Allow-Origin'] = '*'
    return response
    # return JSONResponse(serializer.data)
