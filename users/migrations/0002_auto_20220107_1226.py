# Generated by Django 3.2.8 on 2022-01-07 07:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_auto_20220103_1109'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userlesson',
            name='lesson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courses.lesson', verbose_name='Урок'),
        ),
        migrations.AlterField(
            model_name='userlesson',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
    ]
