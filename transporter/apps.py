from django.apps import AppConfig


class TransporterConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'transporter'
    def ready(self):
        import transporter.signals