from django.contrib import admin
from .models import Todo


class ToDoAdmin(admin.ModelAdmin):
    list = ('name', 'description', 'completed')

admin.site.register(Todo, ToDoAdmin)
