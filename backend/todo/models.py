from django.db import models


class Todo(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.name
