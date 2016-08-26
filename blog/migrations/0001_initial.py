# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('content', models.TextField(verbose_name='文章')),
                ('tag', models.CharField(verbose_name='标签', max_length=10)),
                ('title', models.CharField(verbose_name='标题', max_length=20)),
                ('img', models.ImageField(upload_to='img', default=True)),
                ('date_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('view_count', models.IntegerField(verbose_name='浏览次数', default=0)),
            ],
            options={
                'ordering': ['-date_time'],
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('username', models.CharField(verbose_name="User's name ", max_length=50)),
                ('passwd', models.CharField(verbose_name="User's password ", max_length=50)),
                ('email', models.EmailField(verbose_name="User's email address ", max_length=50)),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.AddField(
            model_name='article',
            name='author',
            field=models.ForeignKey(to='blog.User'),
        ),
    ]
