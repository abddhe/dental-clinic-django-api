# Generated by Django 4.1.5 on 2023-01-09 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('id_number', models.IntegerField(unique=True)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('age', models.SmallIntegerField()),
                ('phone_number', models.BigIntegerField()),
                ('create_on', models.DateTimeField(auto_now_add=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]