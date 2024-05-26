from django import forms

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

from .models import *





class SignUpForm(UserCreationForm):
    email = forms.CharField(max_length=255,required=True,widget=forms.EmailInput())

    class Meta:
        model=User
        fields = {'username','email','password1','password2'}
        
        
    

class LoginForm(AuthenticationForm):
    username = forms.CharField(max_length=100,
                               required=True,
                               widget=forms.TextInput(attrs={'placeholder': 'Username',
                                                             'class': 'form-control',
                                                             }))
    password = forms.CharField(max_length=50,
                               required=True,
                               widget=forms.PasswordInput(attrs={'placeholder': 'Password',
                                                                 'class': 'form-control',
                                                                 'data-toggle': 'password',
                                                                 'id': 'password',
                                                                 'name': 'password',
                                                                 }))
    remember_me = forms.BooleanField(required=False)

    class Meta:
        model = User
        fields = ['username', 'password', 'remember_me']

from django.forms.widgets import CheckboxSelectMultiple, RadioSelect



class UpdateProfileForm(forms.ModelForm):
    avatar = forms.ImageField(widget=forms.FileInput(attrs={'class': 'form-control-file'}))
   
    class Meta:
        model = Profile
        fields = ['avatar', 'Mobile_No' , 'Gender']


class UpdateDriver_ProfileForm(forms.ModelForm):
     
    bloodtype = (
            ('O+','O+'),
            ('B+','B+'),
            ('B-','B-'),
            ('AB+','AB+'),
            ('AB-','AB-'),
            ('A-','A-'),
            ('A+','A+'),
        
        ) 
    Blood_Type = forms.ChoiceField(required=False,
                                     widget=RadioSelect(),
                                     choices=bloodtype)
    class Meta:
        model = Driver_Profile
        fields = ['Blood_Type', 'license_Number' , 'license_Expire_Date']
       