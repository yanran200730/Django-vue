from django.contrib import admin
from .models import Article
from django import forms
# from pagedown.widgets import AdminPagedownWidget
# widget=AdminPagedownWidget()

class ArticleForm(forms.ModelForm):
    content = forms.CharField()

    class Meta:
        model = Article
        fields = '__all__'

class ArticleAdmin(admin.ModelAdmin):
    form = ArticleForm

    class Media:
        # 在管理后台的HTML文件中加入js文件, 每一个路径都会追加STATIC_URL/

        css = {
            'all': ('simditor/simditor.css',)
        }
        js = (
            'simditor/jQuery.min.js',
            'simditor/module.js',
            'simditor/hotkeys.js',
            'simditor/uploader.js',
            'simditor/simditor.js',
            'simditor/config.js',
            'simditor/simditor-autosave.js',
            'simditor/simditor-mark.js',
            # 'simditor/simditor-markdown.js',
        )

admin.site.register(Article,ArticleAdmin)