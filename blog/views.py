from django.shortcuts import render,HttpResponse
from blog.models import Article
from django.core import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .serializers import ArticleSerializer,ArticleListSerializer

def home(request):
    return render(request,"index.html")

class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def article_list(request):
    # article = Article.objects.all()[0:1]
    article = Article.objects.all()
    serializer = ArticleListSerializer(article, many=True)
    response = JSONResponse(serializer.data)
    response['Access-Control-Allow-Origin'] = '*' #跨域
    return response

def article(request,id):
    if request.session.get("visitor") == None:
        clickNumber = 0
    else:
        clickNumber = 1
    article = Article.objects.get(id=str(id))
    article.times = article.times + clickNumber
    article.save()
    request.session["visitor"] = "True"
    serializer = ArticleSerializer(article)
    response = JSONResponse(serializer.data)
    response['Access-Control-Allow-Origin'] = '*' #跨域
    return response

