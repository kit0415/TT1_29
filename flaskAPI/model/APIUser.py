from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


ma = Marshmallow()
db = SQLAlchemy()

class APIUser(db.Model):
    __tablename__ = 'API_USER'
    id = db.Column(db.Integer,primary_key=True)
    public_id = db.Column(db.Integer)
    username = db.Column(db.String(50))
    password = db.Column(db.String(100))
    token = db.Column(db.String(200))
    expireTime = db.Column(db.String(100))
    status = db.Column(db.Integer)
