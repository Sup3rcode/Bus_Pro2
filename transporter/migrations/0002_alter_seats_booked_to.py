# Generated by Django 5.0.6 on 2024-05-26 00:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_student_assign_seats'),
        ('transporter', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seats',
            name='booked_to',
            field=models.OneToOneField(limit_choices_to={'assign_seats': 'False'}, on_delete=django.db.models.deletion.DO_NOTHING, related_name='Student_seat', to='home.student'),
        ),
    ]
