from django.db import models
from .Test import Test

CHOICES = (
    ("a", 'A'),
    ("b", 'B'),
    ("c", 'C'),
    ("d", 'D'),
    ("e", 'E'),
)

class Question(models.Model):
    content = models.CharField("Content", max_length=20000)
    correct_answer = models.CharField('Correct Answer', max_length=1, choices=CHOICES)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    def get_options(self):
        # Returns all options of the question

        from .Option import Option

        return Option.objects.filter(question=self)
    
    def __str__(self):
        if len(self.content) > 20:
            return self.content[20]
        
        else:
            return self.content
    