from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *


class SeatsAdmin(admin.ModelAdmin):
    list_display = ['id', 'bus_no', 'seat_id' , 'booked_to']
    list_editable = ['bus_no' , 'seat_id', 'booked_to']
    #list_editable = ('address','latitude', 'longitude')
admin.site.register(Seats, SeatsAdmin)

class Trips_ScheduleAdmin(admin.ModelAdmin):
    list_display = ['id', 'Trips_Type', 'Trip_Date' , 'bus_no' , 'Trips_Status']

    list_editable = ['bus_no' , 'Trips_Type' , 'Trips_Status']
    def format_date(self, obj):
        return obj.Trip_Date.strftime('d-m-Y')
admin.site.register(Trips_Schedule, Trips_ScheduleAdmin)

class Schedule_Home_To_SchoolAdmin(admin.ModelAdmin):
    list_display = ['id', 'Trips_Type', 'Trip_Date' , 'bus_no' , 'Trips_Status' , 'Bus_Driver','Bus_Staff']

    list_editable = ['bus_no' , 'Trips_Type' , 'Trips_Status']
    def formfield_for_dbfield(self, db_field, **kwargs):
        field =  super(Schedule_Home_To_SchoolAdmin, self).formfield_for_dbfield(db_field, **kwargs)
        if db_field.name == 'Trips_Type':
            field.initial = 'Home_To_School'
    
    
    
    def Bus_Driver(self, obj):
        return obj.bus_no.Driver
    def Bus_Staff(self, obj):
        return obj.bus_no.Staff
admin.site.register(Schedule_Home_To_School, Schedule_Home_To_SchoolAdmin)







class Schedule_School_To_HomeAdmin(admin.ModelAdmin):
    list_display = ['id', 'Trips_Type', 'Trip_Date' , 'bus_no' , 'Trips_Status' , 'Bus_Driver' , 'Bus_Staff']

    list_editable = ['bus_no' , 'Trips_Type' , 'Trips_Status']
    def formfield_for_dbfield(self, db_field, **kwargs):
        field =  super(Schedule_School_To_HomeAdmin, self).formfield_for_dbfield(db_field, **kwargs)
        if db_field.name == 'Trips_Type':
            field.initial = 'School_To_Home'
        
        return field
   
    def Bus_Driver(self, obj):
        return obj.bus_no.Driver
    def Bus_Staff(self, obj):
        return obj.bus_no.Staff
   
admin.site.register(Schedule_School_To_Home, Schedule_School_To_HomeAdmin)





class Trips_BusAdmin(admin.ModelAdmin):
    list_display = ['Trips_id', 'Seat_Number', 'Student_Name' , 'Student_Bus_Status' , 'Student_Take_Time' , 'Student_Leave_Time']

    # list_editable = ('bus_no')
admin.site.register(Trips_Bus, Trips_BusAdmin)
admin.site.register(Buses)