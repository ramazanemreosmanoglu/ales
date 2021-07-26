from django.db import models

BRANCHES = (
    ("SOZEL", "Sozel"),
    ("SAYISAL", "Sayisal")
)

class Test(models.Model):
    name = models.CharField('Name', max_length=200)
    branch = models.CharField('Branch', choices=BRANCHES, max_length=10)

    def get_questions(self):
        # Returns all questions of the test

        from .Question import Question

        return Question.objects.filter(test=self)

    def __str__(self):
        return self.name
    