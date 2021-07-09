from django.shortcuts import render
from django.http.response import JsonResponse
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *

User = get_user_model()


# Create your views here.

def index(request):
    return render(request, 'fan-signup.html')


def fan_signup(request):
    if request.method == 'POST':
        print("helloooo")
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        username = request.POST['username']
        email = request.POST['email']
        timezone = request.POST['timezone']
        password = request.POST['password']
        if User.objects.filter(username=username).exists():
            return JsonResponse('false1', safe=False)
        if User.objects.filter(email=email).exists():
            return JsonResponse('false2', safe=False)
        else:
            User.objects.create_user(first_name=firstname, last_name=lastname, username=username,
                                    email=email, timezone=timezone, password=password)
        return JsonResponse('true', safe=False)
    return render(request, 'fan-signup.html')


def talent_signup(request):
    if request.method == 'POST':
        firstname = request.POST['firstname2']
        lastname = request.POST['lastname2']
        username = request.POST['username2']
        email = request.POST['email2']
        timezone = request.POST['timezone2']
        password = request.POST['password2']
        if User.objects.filter(username=username).exists():
            return JsonResponse('false1', safe=False)
        if User.objects.filter(email=email).exists():
            return JsonResponse('false2', safe=False)
        else:
            User.objects.create_user(first_name=firstname, last_name=lastname, username=username,
                                    email=email, timezone=timezone, password=password, fan=False)
        return JsonResponse('true', safe=False)
    return render(request, 'talent-signup.html')


@api_view(['GET'])
def get_all_fan(request):
    all_fan = User.objects.filter(fan=True)
    serializer = UserGetSerializer(all_fan, many=True)
   
    return Response(serializer.data)


@api_view(['POST'])
def rest_fan_signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def get_all_talent(request):
    all_talent = User.objects.filter(fan=False)
    serializer = UserGetSerializer(all_talent, many=True)
   
    return Response(serializer.data)


@api_view(['POST'])
def rest_talent_signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)