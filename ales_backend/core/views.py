from django.http.response import Http404
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models.Test import Test


def get_all_tests(request):
    try:
        request.GET["sozel"]
        is_sozel = True
    except KeyError:
        is_sozel = False

    try:
        request.GET["sayisal"]
        is_sayisal = True
    except KeyError:
        is_sayisal = False

    if is_sozel:
        tests = Test.objects.filter(branch="SOZEL")
    elif is_sayisal:
        tests = Test.objects.filter(branch="SAYISAL")
    else:
        tests = Test.objects.all()

    result = []

    for test in tests:
        result.append({
            "title": test.name,
            "id": test.id,
        })
    
    return JsonResponse({
        "tests": result,
    })


def get_test(request):
    test_id = request.GET.get("id")

    try:
        test = get_object_or_404(Test, id=int(test_id))
    except TypeError:
        raise Http404

    data = {
        "title": test.name,
        "questions": [],
    }

    questions = test.get_questions()
    number = 0

    for q in questions:
        options = []
        for o in q.get_options():
            options.append([o.type, o.content])
        
        number += 1
        data["questions"].append({
            "no": number,
            "description": q.content,
            "true_answer": q.correct_answer,
            "options": options,
        })
    

    return JsonResponse(data)