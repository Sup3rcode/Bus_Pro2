from django.contrib import admin

# Register your models here.
from .models import *
from import_export.admin import ImportExportModelAdmin

class StudentAdmin(ImportExportModelAdmin):
    list_display = ['id', 'name', 'address', 'latitude', 'longitude']

    list_editable = ('name','address','latitude', 'longitude')
admin.site.register(Student, StudentAdmin)



