from django.shortcuts import render , get_object_or_404
from django.http import JsonResponse
from datetime import timedelta, date
from .models import *
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from home.models import *
from django.shortcuts import get_object_or_404

def daterange(date1, date2):
    for n in range(int ((date2 - date1).days)+1):
        yield date1 + timedelta(n)

    

def Create_Schedule_Trips(request):
    start_dt = date(2024,5,15)
    end_dt = date(2024,7,30)

    weekdays = [4,5]
    for dt in daterange(start_dt, end_dt):
        if dt.weekday() not in weekdays:

            Trips_Schedule.objects.create(Trips_Type = 'School_To_Home' , Trip_Date = dt , bus_no = Buses.objects.first())
           
    return render(request, 'transporter/Trips_Schedule.html' )



def index(request):
    
    ss = Trips_Schedule.objects.all()
    p = Paginator(ss, 5)
    page_number = request.GET.get('page')
    try:
        page_obj = p.get_page(page_number)  # returns the desired page object
    except PageNotAnInteger:
        # if page_number is not an integer then assign the first page
        page_obj = p.page(1)
    except EmptyPage:
        # if page is empty then return last page
        page_obj = p.page(p.num_pages)
    context = {'page_obj': page_obj}
    return render(request, 'transporter/Trips_Schedule.html' , context)





            

def Schedule_School_To_Home_View(request):
    get_role = request.user.profile.role
    
    if get_role == 'Staff':
        data = get_object_or_404(Buses, Staff= request.user.profile)
        #ss = Buses.objects.get_object_or_404(Staff__id = request.user.id )
        
        School_To_Home = Schedule_Home_To_School.objects.filter(bus_no = data ,  Trips_Type =  'School_To_Home')
    
    p = Paginator(School_To_Home, 10)
    page_number = request.GET.get('page')
    try:
        page_obj = p.get_page(page_number)  # returns the desired page object
    except PageNotAnInteger:
        # if page_number is not an integer then assign the first page
        page_obj = p.page(1)
    except EmptyPage:
        # if page is empty then return last page
        page_obj = p.page(p.num_pages)
    context = {'page_obj': page_obj}
    return render(request, 'transporter/Staff_School_To_Home.html' , context)

from datetime import datetime as dt

def Schedule_Home_To_School_View(request):
    get_role = request.user.profile
    
    
    data = get_object_or_404(Buses, Staff= request.user.profile)
        #ss = Buses.objects.get_object_or_404(Staff__id = request.user.id )
        
    Home_To_School = Schedule_Home_To_School.objects.filter(bus_no = data ,  Trips_Type =  'Home_To_School')
    
    
    p = Paginator(Home_To_School, 10)
    page_number = request.GET.get('page')
    try:
        page_obj = p.get_page(page_number)  # returns the desired page object
    except PageNotAnInteger:
        # if page_number is not an integer then assign the first page
        page_obj = p.page(1)
    except EmptyPage:
        # if page is empty then return last page
        page_obj = p.page(p.num_pages)
    context = {'page_obj': page_obj  , 'get_role':get_role}
    return render(request, 'transporter/Staff_Home_To_School.html' , context)

def Trips_Boked(request,Trips_id):
    Trips = get_object_or_404(Trips_Schedule,pk=Trips_id)
    Boked = Trips_Bus.objects.filter(Trips_id = Trips)
    context = {'Trips': Trips , 'Boked':Boked }
    return render(request, 'transporter/Trips_Bus.html' , context)


def video(request):

    

    return render(request, 'transporter/video.html')

import datetime


def  Set_Take_Time(request):
    id1 = request.GET.get('id', None)
    get_id = Trips_Bus.objects.get(id=id1)
    get_id.Student_Take_Time =datetime.datetime.now().time()
    get_id.Student_Bus_Status = 'Take_the_bus'
    get_id.save()
    data = {
        'Done': 'True'
        }
    return JsonResponse(data)

def  Set_Leave_Time(request):
    id1 = request.GET.get('id', None)
    get_id = Trips_Bus.objects.get(id=id1)
    get_id.Student_Leave_Time =datetime.datetime.now().time()
    get_id.Student_Bus_Status = 'Leave_the_bus'
    get_id.save()
    data = {
        'Done': 'True'
        }
    return JsonResponse(data)

def  Set_Not_Attend(request):
    id1 = request.GET.get('id', None)
    get_id = Trips_Bus.objects.get(id=id1)
    get_id.Student_Bus_Status = 'Not_Attend'
    get_id.Student_Leave_Time = None
    get_id.Student_Take_Time = None
    mobile_id = get_id.Student_Name.guardian_numbber
    
    get_id.save()
    data = {
        'Done': 'True'
        }
    number = str(mobile_id)
    name = 'nagib'
    text = number
    Send_SMS(text , name )
    
    print(number)
    return JsonResponse(data )


def  start_trip(request):
    id1 = request.GET.get('id', None)
    get_id = Trips_Schedule.objects.get(id=id1)
    get_id.Trips_Status = 'PENDING'
    get_id.save()
    data = {
        'Done': 'True'
        }
    return JsonResponse(data)





def  end_trip(request):
    id1 = request.GET.get('id', None)
    get_id = Trips_Schedule.objects.get(id=id1)
    get_id.Trips_Status = 'DELIVERED'
    get_id.save()
    data = {
        'Done': 'True'
        }
    return JsonResponse(data)


from home.SMS import *
def  end_sms():
   name = 'ngggg'
   text = '966563481855'
   Send_SMS(text , name )
   return JsonResponse('data', safe=False)

def Driver_Directions_HomeToSchool(request):
    get_role = request.user.profile.role
    
    
    ss = Buses.objects.get(Driver__id = request.user.profile.id)
    School_To_Home = Schedule_Home_To_School.objects.filter(bus_no__id = ss.id , Trips_Type =  'Home_To_School')
 
    p = Paginator(School_To_Home, 10)
    page_number = request.GET.get('page')
    try:
        page_obj = p.get_page(page_number)  # returns the desired page object
    except PageNotAnInteger:
        # if page_number is not an integer then assign the first page
        page_obj = p.page(1)
    except EmptyPage:
        # if page is empty then return last page
        page_obj = p.page(p.num_pages)
    context = {'page_obj': page_obj , 'stu':School_To_Home}
    return render(request, 'transporter/Driver_Home_To_School.html' , context)

def Driver_Directions_SchoolToHome(request):
    get_role = request.user.profile.role
    

    ss = Buses.objects.get(Driver__id = request.user.profile.id)
    School_To_Home = Trips_Schedule.objects.filter(bus_no__id = ss.id , Trips_Type =  'School_To_Home')
   
    p = Paginator(School_To_Home, 10)
    page_number = request.GET.get('page')
    try:
        page_obj = p.get_page(page_number)  # returns the desired page object
    except PageNotAnInteger:
        # if page_number is not an integer then assign the first page
        page_obj = p.page(1)
    except EmptyPage:
        # if page is empty then return last page
        page_obj = p.page(p.num_pages)
    context = {'page_obj': page_obj , 'stu':School_To_Home}
    return render(request, 'transporter/Driver_School_To_Home.html' , context)





def Driver_Map_Directions(request,Trips_id):
    Trips = get_object_or_404(Trips_Schedule,pk=Trips_id)
    stu = Trips_Bus.objects.filter(Trips_id = Trips , Student_Bus_Status = 'Take_the_bus')
    dd = stu.values('Student_Name')
    print(dd)
    
    ss = Student.objects.filter(id__in = dd )
    context = {'stu':ss }

    #stu = Student.objects.filter(id__in=trpbus.Student_Name.id)
    
    if Trips.Trips_Type == 'Home_To_School' :
        
        return render(request, 'transporter/Driver/Driver_Directions_HomeToSchool.html' , context)
    else :
        return render(request, 'transporter/Driver/Driver_Directions_SchoolToHome.html' , context)





def inbox_view(request , messges_id=None):
    my_messges = Guardians_Message.objects.filter(To_User=request.user)
   
    commit_list = Comment.objects.filter(user=request.user)
        
    context = {
        'my_msg': my_messges,
        'msg': commit_list ,
      
    }
    return render(request, 'transporter/inbox.html', context)