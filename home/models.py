from django.db import models
from django.db.models import Q
from users.models import *
# Create your models here.
Gender = (
		('boy', 'boy'),
		('girl', 'girl'),
		
	)

def Path_Student_Avatar(instance,filename):
    

    return "student/%s/avataer/%s/avatar.jpeg"%(instance.id ,instance.name)



class is_NotNullManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().exclude(latitude__isnull=True).exclude(latitude__exact='')

class is_NullManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().exclude(latitude__isnull=False)

class Student(models.Model):
    name = models.CharField(max_length=200, null=True) 
    age = models.IntegerField( null=True) 
    gender = models.CharField(choices=Gender, default = 'boy' , max_length=10)
    guardian_numbber = PhoneNumberField(help_text= 'EXP : 966563481855' ,blank=True , null=True , default='966563481855')
    Guardians_id = models.ForeignKey(Profile, limit_choices_to={'role': 'Guardian'}, on_delete=models.DO_NOTHING , related_name='Students_Guardians', null=True , blank=True)
    address = models.CharField(max_length=2000, null=True,blank=True)
    address2 = models.CharField(max_length=2000, null=True,blank=True)
    latitude = models.CharField(max_length=200,blank=True, null=True)
    longitude = models.CharField(max_length=200,blank=True, null=True)
    avatar = models.FileField(upload_to=Path_Student_Avatar , default='media/Student/avataer/profile_av.jpg')
    assign_seats = models.BooleanField(default=False)
    objects = models.Manager()
    is_not_nool = is_NotNullManager()
    is_null = is_NullManager()
    def __str__(self):
         return self.name
    class Meta:
        ordering = ["-address"] 
