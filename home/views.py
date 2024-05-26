from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from users.models import *
from transporter.views import *
import datetime
# Create your views here.
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required


@login_required(login_url='users:login')
def home(request):

    
    key = settings.GOOGLE_MAKER_API_KEY
    stu = Student.is_not_nool.all()
    stu_count = Student.objects.count()
    driver_count = Driver_Profile.objects.count()
    staff_count = Profile.objects.count()
    guardians_count = Profile.objects.count()
    print(stu_count)
   
    context = {
        'key':key,
        'stu':stu,
        'stu_count':stu_count,
        'driver_count':driver_count,
        'staff_count':staff_count,
        'guardians_count':guardians_count,
    }
    return render(request, 'home/home.html',context)


@login_required(login_url='users:login')
def Student_Location():
   
    result_list = list(Student.objects\
                .values('id',
                        'name', 
                        'latitude',
                        'longitude',
                        'avatar',
                        'gender',
                        'age',
                        ))

    return JsonResponse(list(result_list), safe=False)



from .SMS  import *
def save(self, *args, **kwargs):
        name = 'ngggg'
        text = '966563481855'
        Send_SMS(text , name )
        

def  end_sms(request):
   name = 'ngggg'
   text = '966563481855'
   Send_SMS(text , name )
   return JsonResponse('data')



def mydata2(request):
   
    result_list = list(Student.objects\
                .values('id',
                        'name', 
                        'latitude',
                        'longitude',
                        'avatar',
                        'gender',
                        'age',
                        ))

    return JsonResponse(list(result_list), safe=False)