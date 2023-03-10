# Generated by Django 4.1.5 on 2023-01-09 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0004_alter_patient_doctors'),
        ('doctors', '0006_alter_doctor_patients'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='patients',
            field=models.ManyToManyField(blank=True, to='patients.patient'),
        ),
    ]
