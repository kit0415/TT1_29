from flask_restful import Resource
from flask import request,jsonify
from datetime import date
from model.Model import db
import json,sys,os
from passlib.hash import sha256_crypt, pbkdf2_sha256


from os import environ
import requests

class User(db.Model):
    __tablename__ = 'customer'

    id = db.Column(db.String(20), primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(10), nullable=False)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    postal_code = db.Column(db.String(30), nullable=False)
    gender = db.Column(db.String(30),nullable=False)
    created_at =db.Column(db.String(30),nullable=False)

    def __init__(self, id, username, password, first_name, last_name, postal_code, gender, created_at):
        self.id = id
        self.username = username
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.postal_code = postal_code
        self.gender = gender
        self.created_at = created_at

    def json(self):
        return {
            "id": self.id,
            "username": self.username,
            "password": self.password,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "postal_code": self.postal_code,
            "gender": self.gender,
            "created_at": self.created_at
        }

def get_all():
    return jsonify({"customer": [customer.json() for customer in customer.query.all()]})

class LoginController(Resource):
    def get(self):        
        #get method
        return {'status': 'success', 'data': "User login Controller"}, 200

    def post(self):
        #post method
        return {'status': 'success', 'data': "Post User login Controller"}, 200


db = SQLAlchemy(app)
CORS(app)

class RegisterController(Resource):
    def get(self):   
        #get method  
        return {'status': 'success', 'data': "Register user Controller"}, 200

    def post(self):
        #post method
        return {'status': 'success', 'data': "Post register User Controller"}, 200
