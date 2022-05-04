from pyexpat import model
from rest_framework import serializers
from .models import Todo

class TodoSerializers(serializers.ModelSerializers):
    class Meta:
        model = Todo
        fields = ('id','name','description','completed')