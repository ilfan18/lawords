# Generated by Django 3.2.8 on 2022-01-03 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_auto_20211229_2310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='exercise_type',
            field=models.CharField(blank=True, choices=[('', 'Выберите тип задания'), ('word_miss_type', 'Заполнить пропуск'), ('translate_type', 'Перевод с картинки')], default='word_miss_type', max_length=255, verbose_name='Тип задания'),
        ),
    ]
