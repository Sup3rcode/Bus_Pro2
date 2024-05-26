from django.db import models
from django.contrib.auth.models import AbstractUser , BaseUserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.staticfiles import *
from django.conf import settings
from PIL import Image
from .validators import *
from phonenumber_field.modelfields import PhoneNumberField

class User(AbstractUser):
    
    class Meta:
        permissions = (
            ("client", "Client"),
            ("support", "Support"),
        )


def Path_Profile_Avatar(instance,filename):
    

    return "media/Tourism/%s/Users/avataer/%s/avatar.jpeg"%(instance.user.username ,instance.user.username)

   

gender = (
        ('Male','Male'),
        ('Female','Female')
      
    )   



 
blood_type = (
        ('O+','O+'),
        ('B+','B+'),
        ('B-','B-'),
        ('AB+','AB+'),
        ('AB-','AB-'),
        ('A-','A-'),
        ('A+','A+'),
      
    )   

# Extending User Model Using a One-To-One Link
class Profile(models.Model):
    class Role(models.TextChoices):
        Staff = "Staff", "Staff" # مشرف
        Guardian = "Guardian", "Guardian" # ولي أمر 
        Driver = "Driver", "Driver" # سائق حافله
        MEMBERS = "MEMBERS", "Members"
    base_role = Role.MEMBERS
    role = models.CharField(max_length=50, choices=Role.choices , default=base_role)
    user = models.OneToOneField(User, on_delete=models.CASCADE , related_name='profile')
    avatar = models.ImageField(default='default.jpg', upload_to='profile_images')
    Gender = models.CharField(choices=gender, default = 'Male' , max_length=10)
    Mobile_No = PhoneNumberField(help_text= 'EXP : 966563481855' ,blank=True , null=True , default='966563481855')

    def __str__(self):
        return self.user.username




class Driver_Profile(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE , related_name='Driver_Profile' , limit_choices_to={'role': 'Driver'})
    Blood_Type = models.CharField(choices=blood_type, default = 'O+' , max_length=10)
    license_Number = models.CharField(max_length=10 , blank=True, null=True)
    license_Expire_Date = models.DateField(validators=[validate_license_Expire] , blank=True, null=True)
    
    
    def __str__(self):
        return str(self.profile)
    class Meta:
     
        verbose_name_plural = "Driver Profile"  


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


post_save.connect(create_profile, sender=User)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()



class GuardianManager(Profile):
    def get_queryset(self, *args, **kwargs):
        results = super().get_queryset(*args, **kwargs)
        return results.filter(role=Profile.Role.Guardian)


class Guardians(Profile):

    base_role = Profile.Role.Guardian

    Guardian = GuardianManager()

    class Meta:
        proxy = True
        verbose_name_plural = " Students Guardians"  