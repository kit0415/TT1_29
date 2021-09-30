from flask_restful import Resource
from flask import request,jsonify
from datetime import date
from model.Model import db
import json

class LoginController(Resource):
    def get(self):        
        #get method
        return {'status': 'success', 'data': "User login Controller"}, 200

    def post(self):
        #post method
        return {'status': 'success', 'data': "Post User login Controller"}, 200


class RegisterController(Resource):
    def get(self):   
        #get method  
        return {'status': 'success', 'data': "Register user Controller"}, 200

    def post(self):
        #post method
        return {'status': 'success', 'data': "Post register User Controller"}, 200
