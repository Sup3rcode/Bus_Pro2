# Generated by Django 5.0.6 on 2024-05-19 02:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
        ('users', '0003_guardianmanager_guardians'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='Guardians_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='Students_Guardians', to='users.guardians'),
        ),
    ]
