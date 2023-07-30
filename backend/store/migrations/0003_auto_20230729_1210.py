# Generated by Django 3.2.6 on 2023-07-29 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ManyToManyField(to='store.Category'),
        ),
    ]
