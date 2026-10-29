from django.db import models


import uuid
from cassandra.cqlengine import columns, models
from django_cassandra_engine.models import DjangoCassandraModel
from cassandra.cqlengine.connection import setup
from cassandra.cqlengine.management import sync_table

# Create your models here.

# Faire un point avec Guillaume concernant la mise en forme des données


def cass_connect():
    setup(['127.0.0.1'], 'mspr', retry_connect=True, )
    sync_table(Beach)


class ExampleModel(DjangoCassandraModel):
    example_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    example_type = columns.Integer(index=True)
    created_at = columns.DateTime()
    description = columns.Text(required=False)


''' class BeachReport(models.Model):
    beachName = columns.Text(max_length=200)
    measurementTime = columns.DateTime()
    windDirection = models.IntegerField()
    windSpeed = models.IntegerField()
    humidity = models.IntegerField()
    airTemperature = models.IntegerField()
    precipitationType = models.IntegerField()
    waveHeight = models.IntegerField()
    wavePeriodicity = models.IntegerField()
 '''

''' 
class beachSummary(DjangoCassandraModel):
    beachName = models.CharField(max_length=200)
    airTemperature = models.IntegerField()
    waterTemperature = models.IntegerField()
 '''


class Beach(models.Model):
    last_update = columns.DateTime(primary_key=True)
    beach_name = columns.Text(partition_key=True)
    data = columns.Map(columns.Text, columns.Float)


class Sensors(DjangoCassandraModel):

    sensor_id = columns.UUID(primary_key=True)
    last_update = columns.DateTime()
    data = columns.Map(columns.Text, columns.Float)

# create table beach ( last_update timestamp, beach_name text, data map<text,float>, primary key ( last_update, beach_name)
# create table sensors ( last_update timestamp, sensor_id uuid, data map<text,float>, primary key ( last_update, sensor_id))
