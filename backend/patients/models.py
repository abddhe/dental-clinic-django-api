from django.db import models
# Create your models here.

class Patient(models.Model):
    name = models.CharField(max_length=100)
    id_number = models.IntegerField(unique=True)
    email= models.EmailField(max_length=100,unique=True)
    age=models.SmallIntegerField()
    phone_number = models.BigIntegerField()
    create_on = models.DateTimeField(auto_now_add=True)
    last_modified=models.DateTimeField(auto_now=True)
    doctors = models.ManyToManyField('doctors.Doctor')

    def __str__(self) -> str:
        return self.name;