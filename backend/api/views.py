from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, DoctorSerializer, PatientSerializer
from django.contrib.auth.models import User
from doctors.models import Doctor
from patients.models import Patient


# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
