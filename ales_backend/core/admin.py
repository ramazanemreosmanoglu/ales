from django.contrib import admin
from .models import Question, Test, Option

for m in (Question.Question, Test.Test, Option.Option):
    admin.site.register(m)