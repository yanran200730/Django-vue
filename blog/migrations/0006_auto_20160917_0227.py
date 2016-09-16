# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20160916_2122'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['-created']},
        ),
        migrations.RenameField(
            model_name='article',
            old_name='date_time',
            new_name='created',
        ),
        migrations.RenameField(
            model_name='article',
            old_name='view_count',
            new_name='times',
        ),
        migrations.AlterField(
            model_name='article',
            name='author',
            field=models.ForeignKey(related_name='name', to='blog.Users'),
        ),
    ]
