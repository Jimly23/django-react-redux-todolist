from django.db import models

# Create your models here.
class Todolist(models.Model):
    todo = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.todo