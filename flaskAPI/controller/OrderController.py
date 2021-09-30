from flask_restful import Resource
from flask import request,jsonify
from datetime import date

from flask_sqlalchemy import _QueryProperty
from model.Model import db
import json,sys,os


class Order(db.Model):
    __tablename__ = 'cart_item'

    id = db.Column(db.String(20), primary_key=True)
    customer_id = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(10), nullable=False)
    created_at = db.Column(db.String(30), nullable=False)
    

    def __init__(self, id, customer_id, status, created_at):
        self.id = id
        self.customer_id = customer_id
        self.status = status
        self.created_at = created_at    
        
    def json(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "qty": self.qty,
            "cart_value": self.cart_value            
        }


class Order(Resource):
    def get(self):
        json_data = request.get_json(force=True)
        print("data receiove is "+ str(json_data))
        if not json_data:
            return {'message': "invalid format"}, 400
        if json_data is None:
            return {"message": "Empty data"}, 400
        data = self.getCartItem(json_data)
        print("data is "+str([cart_item.json() for cart_item in data]))
        #User.json() for customer in User.query.all()
        if data is not None:
             return {'status': 'success', 'data': str([cart_item.json() for cart_item in data])}, 200
        else:
             return {'status': 'success', 'data': None}, 400
