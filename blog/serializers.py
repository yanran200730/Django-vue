from .models import Users, Article
from rest_framework import serializers

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
	author = serializers.ReadOnlyField(source='author.username')
	
	class Meta:    
		model = Article
		fields = ('id','author', 'content','tag','title','created','times')

class ArticleListSerializer(serializers.HyperlinkedModelSerializer):
	author = serializers.ReadOnlyField(source='author.username')
	
	class Meta:    
		model = Article
		fields = ('id','author', 'abstract','tag','title','created','times')

# class UsersSerializer(serializers.ModelSerializer):
	
# 	class Meta:
# 		model = Users
# 		fields = ('id','username', 'passwd','email','date')


