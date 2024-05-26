from .views import *
from django.urls import path, include
from . import views as view


app_name = 'transporter'
urlpatterns = [
   path('',view.index, name="index"),
   path('Schedule_School_To_Home/',view.Schedule_School_To_Home_View, name="Schedule_School_To_Home"),
   path('Schedule_Home_To_School/',view.Schedule_Home_To_School_View, name="Schedule_Home_To_School"),
   path('Driver_Directions_HomeToSchool/',view.Driver_Directions_HomeToSchool, name="Driver_Directions_HomeToSchool"),
   path('Driver_Directions_SchoolToHome/',view.Driver_Directions_SchoolToHome, name="Driver_Directions_SchoolToHome"),
   path('Set_Take_Time/', Set_Take_Time, name='Set_Take_Time'),
   path('Set_Leave_Time/', Set_Leave_Time, name='Set_Leave_Time'),
   path('Set_Leave_Time/', Set_Leave_Time, name='Set_Leave_Time'),
   path('Set_Not_Attend/', Set_Not_Attend, name='Set_Not_Attend'),
   path('start_trip/', start_trip, name='start_trip'),
   path('end_trip/', end_trip, name='end_trip'),
   path('Trips_Boked/<int:Trips_id>/',Trips_Boked,name='Trips_Boked') ,
   path('Driver_Map_Directions/<int:Trips_id>/',Driver_Map_Directions,name='Driver_Map_Directions') ,
   path('', index, name="inbox"), 
   path('video/', video, name="video"), 
   path('inbox/', inbox_view, name="inbox"), 
 

]