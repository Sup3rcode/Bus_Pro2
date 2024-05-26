from .views import *
from django.urls import path, include
from . import views as view

#from transporter.views import Create_Schedule_Trips
app_name = 'home'
urlpatterns = [
   path('',view.home, name="index"),
   path('c/',Create_Schedule_Trips, name="index22"),
   path('Student_Location/',view.Student_Location, name="Student_Location"),
   path('mydata2/',view.mydata2, name="mydata2"),
  
  

]