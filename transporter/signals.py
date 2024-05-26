from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import *

@receiver(post_save, sender=Trips_Schedule)
def Create_Trips_Bus(sender, instance, created, **kwargs):
    if created:
        seat_list = Seats.objects.filter(bus_no__id = instance.bus_no.id)
        for i in seat_list :
            print(i)
            seat_num = Seats.objects.get(id=i.id)
            stu_num = Student.objects.get(id=i.booked_to.id)
            Trips_Bus.objects.create(Trips_id = instance , Seat_Number = seat_num , Student_Name = stu_num)
            
post_save.connect(Create_Trips_Bus, sender=Trips_Schedule)