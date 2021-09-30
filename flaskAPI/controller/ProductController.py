from flask_restful import Resource
from flask import request,jsonify
from datetime import date
from model.Model import db
import json




class ProductController(Resource):
    def get(self):        
        #get method
  
        return {'status': 'success', 'data': "Get product listing Controller"}, 200

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
