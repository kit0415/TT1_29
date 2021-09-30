from flask_restful import Resource
from flask import request,jsonify
from datetime import date
from model.Model import db
import json,sys,os
from passlib.hash import sha256_crypt, pbkdf2_sha256
from uuid import uuid4


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
    token = db.Column(db.String(100),nullable= True)

    def __init__(self, id, username, password, first_name, last_name, postal_code, gender, created_at,token):
        self.id = id
        self.username = username
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.postal_code = postal_code
        self.gender = gender
        self.created_at = created_at
        self.token = token

    def json(self):
        return {
            "id": self.id,
            "username": self.username,
            "password": self.password,
            "firstname": self.first_name,
            "lastname": self.last_name,
            "postal_code": self.postal_code,
            "gender": self.gender,
            "created_at": self.created_at,
            "token":self.token
        }

def get_all():
    return jsonify({"customer": [User.json() for customer in User.query.all()]})

class LoginController(Resource):
    def get(self):        
        #get method
        
        return jsonify({"user": [user.json() for user in User.query.all()]})
        #return {'status': 'success', 'data': "User login Controller"}, 200

    def post(self):
        #post method       
        json_data = request.get_json(force=True)
        print("data receiove is "+ str(json_data))
        if not json_data:
            return {'message': "invalid format"}, 400
        if json_data is None:
            return {"message": "Empty data"}, 400
        data = self.getUserById(json_data)
        print("data is "+json.dumps(data,default=str))
        if data == 1:
             return {'status': 'success', 'data': data}, 200
        else:
             return {'status': 'success', 'data': data}, 400
       

    
    def getUserById(self,req):
        user = User.query.filter_by(id = req["id"]).first()
        if user:            
            if req["password"] == user.json()["password"]:
                token =  str(uuid4())
                user.token = token
               # db.session.add(user)
                db.session.commit()
                db.session.close()
                return token
            else:
                print("not same")
                return None


    # def xx():
    #      data = request.get_json()
    # if data:
    #     email = data['email']
    #     passenger = Passenger.query.filter_by(email=email).first()
    #     if passenger:
    #         password_hashed = passenger.get_password()
    #         entered_pwd = data['password']
    #         if sha256_crypt.verify(entered_pwd, password_hashed):
    #             return jsonify({"message": "Login success"}), 200
    #         else:
    #             return jsonify({"message": "Wrong password"}), 400
    #     else:
    #         return jsonify({"message": "Wrong username"}), 400
class LogoutController(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        print("data receiove is "+ str(json_data))
        if not json_data:
            return {'message': "invalid format"}, 400
        if json_data is None:
            return {"message": "Empty data"}, 400
        data = self.logoutUser(json_data)
        
        if data == 1:
             return {'status': 'success', 'data': data}, 200
        else:
             return {'status': 'success', 'data': data}, 400
       

    
    def logoutUser(self,req):
        user = User.query.filter_by(id = req["id"]).first()
        if user:            
            token =  ""
            user.token = token
            # db.session.add(user)
            db.session.commit()
            db.session.close()
            return 1
        return 0
                
            

class RegisterController(Resource):
    def get(self):   
        #get method  
        return {'status': 'success', 'data': "Register user Controller"}, 200

    def post(self):
        #post method
        return {'status': 'success', 'data': "Post register User Controller"}, 200
