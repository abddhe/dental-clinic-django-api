# Generated by Django 4.1.5 on 2023-01-09 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0005_alter_doctor_patients'),
        ('patients', '0002_patient_doctors'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='doctors',
            field=models.ManyToManyField(null=True, to='doctors.doctor'),
        ),
    ]
