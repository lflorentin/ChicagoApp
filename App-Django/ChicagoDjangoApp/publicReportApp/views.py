from django.shortcuts import render
from django import http
from publicReportApp.models import Beach, Sensors, cass_connect
import uuid
from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel
from django.db.models.functions.datetime import datetime
from cassandra.cqlengine import functions
# Create your views here.


def GetAboutInformation(request):
    cass_connect()
    min_time = datetime(2020, 3, 20)
    max_time = datetime(2020, 5, 20)
    for beach in Beach.objects().all():
        print(beach.beach_name)
    q = Beach.objects.all()
    print(q)
    resultBDD = []
    resultHTTP = []
    for element in beach.filter(last_update__gt=min_time).allow_filtering():
        resultBDD.append(element)
        print(resultBDD)

    for elem in resultBDD:
        obj = {}
        for i in elem:
            if(i == "last_update"):
                elem[i] = elem[i].strftime("%d %b %Y")
            obj[i] = elem[i]
        resultHTTP.append(obj)

    print(resultHTTP)

    return http.JsonResponse(resultHTTP, safe=False)


def Home(Request):
    return http.HttpResponse("bijour")
