from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views
from .forms import LoginForm
app_name = 'users'
urlpatterns = [
    path('', home, name='users-home'),
    path('login/',auth_views.LoginView.as_view(template_name='users/login.html'),name='login'),
    path('logout/', logout_view, name='logout'),
    path('register/', signup, name='register'),
    path('profile/', pro, name='user_profile'),
    path('Driver_Profile/', Driver_Profile_view, name='Driver_Profile'),
    path('settings/change_password/',auth_views.PasswordChangeView.as_view(template_name='users/change_password.html', success_url=reverse_lazy('users:password_change_done')),name='password_change'),
    path('settings/change_password/done/',auth_views.PasswordChangeDoneView.as_view(template_name='users/change_password_done.html'),name='password_change_done'),

]
