from rest_framework import serializers
from django.contrib.auth.models import User
from doctors.models import Doctor
from patients.models import Patient


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['id','username','email']

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id','name','id_number','email','age','address','phone_number','patients']

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id','name','id_number','email','age','phone_number','doctors']