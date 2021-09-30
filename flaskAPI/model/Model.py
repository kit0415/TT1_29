from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flaskext.mysql import MySQL


ma = Marshmallow()
db = SQLAlchemy()


