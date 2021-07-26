from django.db import models
from .Question import Question


CHOICES = (
    ("a", 'A'),
    ("b", 'B'),
    ("c", 'C'),
    ("d", 'D'),
    ("e", 'E'),
)

class Option(models.Model):
    content = models.CharField('Content', max_length=10000)
    type = models.CharField('Type', max_length=1, choices=CHOICES)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.type}: {self.content}"