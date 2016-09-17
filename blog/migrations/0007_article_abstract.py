# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20160917_0227'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='abstract',
            field=models.CharField(max_length=200, default=datetime.datetime(2016, 9, 17, 15, 14, 36, 204990)),
            preserve_default=False,
        ),
    ]
