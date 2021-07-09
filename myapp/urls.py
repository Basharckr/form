from django.urls import path, include
from .views import *

urlpatterns = [
    path('', fan_signup, name='fan-signup'),
    path('talent-signup/', talent_signup, name='talent-signup'),
    path('all-fan/', get_all_fan, name='all-fan'),
    path('all-talent/', get_all_talent, name='all-talent'),
    path('signup/fan/', rest_fan_signup, name='rest-fan-signup'),
    path('signup/talent/', rest_fan_signup, name='rest-talent-signup'),

    
]
