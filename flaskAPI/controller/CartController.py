from flask_restful import Resource
from flask import request,jsonify
from datetime import date

from flask_sqlalchemy import _QueryProperty
from model.Model import db
import json,sys,os


class cart_item(db.Model):
    __tablename__ = 'cart_item'

    id = db.Column(db.String(20), primary_key=True)
    user_id = db.Column(db.String(20), nullable=False)
    product_id = db.Column(db.String(10), nullable=False)
    qty = db.Column(db.String(30), nullable=False)
    cart_value = db.Column(db.String(30), nullable=False)
   
    def __init__(self, id, user_id, product_id, qty, cart_value):
        self.id = id
        self.user_id = user_id
        self.product_id = product_id
        self.qty = qty
        self.cart_value = cart_value
        
    def json(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "qty": self.qty,
            "cart_value": self.cart_value            
        }


class CartController(Resource):
    def get(self):
        json_data = request.get_json(force=True)
        print("data receiove is "+ str(json_data))
        if not json_data:
            return {'message': "invalid format"}, 400
        if json_data is None:
            return {"message": "Empty data"}, 400
        data = self.getCartItem(json_data)
        print("data is "+json.dumps(data,default=str))
        if data == 1:
             return {'status': 'success', 'data': data}, 200
        else:
             return {'status': 'success', 'data': data}, 400

    def post(self):
        json_data = request.get_json(force=True)
        print("data receiove is "+ str(json_data))
        if not json_data:
            return {'message': "invalid format"}, 400
        if json_data is None:
            return {"message": "Empty data"}, 400
        data = self.addCartItem(json_data)
        print("data is "+json.dumps(data,default=str))
        if data == 1:
             return {'status': 'success', 'data': data}, 200
        else:
             return {'status': 'success', 'data': data}, 400
       

    def put(self):
        json_data = request.get_json(force=True)
        print("data receiove is "+ str(json_data))
        if not json_data:
            return {'message': "invalid format"}, 400
        if json_data is None:
            return {"message": "Empty data"}, 400
        data = self.deleteCartItem(json_data)
        print("data is "+json.dumps(data,default=str))
        if data == 1:
             return {'status': 'success', 'data': data}, 200
        else:
             return {'status': 'success', 'data': data}, 400

    def delete(self):
        json_data = request.get_json(force=True)
        print("data receiove is "+ str(json_data))
        if not json_data:
            return {'message': "invalid format"}, 400
        if json_data is None:
            return {"message": "Empty data"}, 400
        data = self.deleteCartItem(json_data)
        print("data is "+json.dumps(data,default=str))
        if data == 1:
             return {'status': 'success', 'data': data}, 200
        else:
             return {'status': 'success', 'data': data}, 400
        
    def getCartItem(self,req):
        cartItem = cart_item.query.filter_by(cart_value = req["cart_value"], user_id = req["user_id"]).all()
        if not cartItem:           
            return None
        else:
            print(str(cartItem))
            return cartItem
       

    def addCartItem(self,req):
        cartItem = cart_item.query.filter_by(cart_value = req["cart_value"], product_id = req["product_id"], user_id = req["user_id"]).first()
        if not cartItem:       
            cartId =  cart_item.query.order_by(cart_item.id.desc()).first()           
            record = cart_item(str(int(cartId.id)+1), req["user_id"], req["product_id"], req["qty"], req["cart_value"])
            db.session.add(record)
            db.session.commit()
            db.session.close()
        else:
            cartItem.qty += req["qty"]
            db.session.commit()
            db.session.close()
        return True

    def deleteCartItem(self,req):
        cartItem = cart_item.query.filter_by(cart_value = req["cart_value"], product_id = req["product_id"], user_id = req["user_id"]).first()
        if cartItem:            
            db.session.delete(cartItem)
            db.session.commit()
            db.session.close()
       
        return True

    def updateCartItem(self,req):
        cartItem = cart_item.query.filter_by(cart_value = req["cart_value"], product_id = req["product_id"], user_id = req["user_id"]).first()
        if cartItem:            
            cartItem.qty = req["qty"]
            db.session.commit()
            db.session.close()
       
        return True

