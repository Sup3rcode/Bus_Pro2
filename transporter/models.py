from django.db import models
from users.models import *
from home.models import *
from django.utils import timezone
from django.utils.timesince import timesince
from django.conf import settings
import uuid
from django.db.models.signals import post_save, post_delete





class Buses(models.Model):
    bus_no = models.CharField(max_length=255)
    Driver = models.OneToOneField(Profile, limit_choices_to={'role': 'Driver'},  on_delete=models.DO_NOTHING , related_name='Driver_Bus' , null=True , blank=True)
    Staff = models.OneToOneField(Profile, limit_choices_to={'role': 'Staff'},  on_delete=models.DO_NOTHING , related_name='Staff_Bus' , null=True , blank=True)
    def __str__(self):
        return str(self.bus_no)
    


class Seats(models.Model):
    bus_no = models.ForeignKey(Buses,  on_delete=models.DO_NOTHING , related_name='Bus')
    seat_id=models.CharField(max_length=10, unique=True)
    booked_to = models.OneToOneField(Student, limit_choices_to={'assign_seats': 'False'} ,  on_delete=models.DO_NOTHING , related_name='Student_seat' )
    
    def __str__(self):
        return str(self.seat_id)
    def save(self, *args, **kwargs):
        get_stu = Student.objects.get(id=self.booked_to.id)
        get_stu.assign_seats = True
        get_stu.save()
        return super().save(*args, **kwargs)

Trips_Type = (
			('Home_To_School', 'To School'),
			('School_To_Home', 'To Home'),
			)



Trips_Status = (
			('DELIVERED', 'DELIVERED'),
			('PENDING', 'PENDING'),
			('Not Yet', 'Not Yet'),
			)
class Type_Role(models.TextChoices):
        Home_To_School = "Home_To_School", "Home_To_School"
        School_To_Home = "School_To_Home", "School_To_Home" 

class Trips_Schedule(models.Model):
    
    base_role = Type_Role.Home_To_School
    Trips_Type = models.CharField(max_length=50, choices=Type_Role.choices , default=base_role)
    Trip_Date = models.DateField(auto_now=False , blank=True , null=True)
    Trips_Status = models.CharField(choices=Trips_Status, max_length=30 , default = 'Not Yet')
    Start_Time = models.TimeField(auto_now=False , blank=True , null=True)
    End_Time = models.TimeField(auto_now=False , blank=True , null=True)
    bus_no = models.ForeignKey(Buses,  on_delete=models.DO_NOTHING , related_name='Bus_Trips')
    
    def __str__(self):
        return str(self.Trips_Type)
    class Meta:
       unique_together = ('bus_no', 'Trip_Date')





class Schedule_Home_To_SchoolManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        results = super().get_queryset(*args, **kwargs)
        return results.filter(Trips_Type=Type_Role.Home_To_School)


class Schedule_Home_To_School(Trips_Schedule):

    base_role = Type_Role.Home_To_School

    Home_To_School = Schedule_Home_To_SchoolManager()


    class Meta:
        proxy = True
        verbose_name_plural = " Home_To_School "  





class Schedule_School_To_Home(models.Manager):
    def get_queryset(self, *args, **kwargs):
        results = super().get_queryset(*args, **kwargs)
        return results.filter(Trips_Type=Type_Role.School_To_Home)


class Schedule_School_To_Home(Trips_Schedule):
    
    base_role = Type_Role.School_To_Home
    #Trips_Type = models.CharField(max_length=50, choices=Type_Role.choices , default=base_role)

    School_To_Home = Schedule_School_To_Home()


    class Meta:
        proxy = True
        verbose_name_plural = " School_To_Home "  














class Student_Bus_Status(models.TextChoices):
        Take_the_bus = "Take_the_bus", "Take_the_bus"
        Leave_the_bus = "Leave_the_bus", "Leave_the_bus" 
        Not_Attend = "Not_Attend", "Not_Attend" 






class Trips_Bus(models.Model):
    Trips_id = models.ForeignKey(Trips_Schedule,  on_delete=models.DO_NOTHING , related_name='Trips_Bus_id')
    Seat_Number = models.ForeignKey(Seats,  on_delete=models.DO_NOTHING , related_name='Trips_Seat_id', null=True , blank=True)
    Student_Name = models.ForeignKey(Student,  on_delete=models.DO_NOTHING , related_name='Trips_Student_id', null=True , blank=True)
    Student_Take_Time = models.TimeField(auto_now=False , blank=True , null=True)
    Student_Leave_Time = models.TimeField(auto_now=False , blank=True , null=True)
    Student_Bus_Status = models.CharField(max_length=50, choices=Student_Bus_Status.choices ,blank=True , null=True)


    class Meta:
       unique_together = [('Trips_id', 'Student_Name'), ('Trips_id', 'Seat_Number')]
   
   

# Create your models here.
class Guardians_Message(models.Model):
	message = models.TextField()
	From_User = models.ForeignKey(User, related_name='From_User' , on_delete=models.CASCADE)
	To_User = models.ForeignKey(User, related_name='To_user', on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

class Comment(models.Model):
	comment = models.TextField()
	user = models.ForeignKey(User, related_name='usercomment' , on_delete=models.CASCADE)
	message = models.ForeignKey(Guardians_Message, related_name='messagecomment', on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)