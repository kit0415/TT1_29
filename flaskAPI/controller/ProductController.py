from flask_restful import Resource
from flask import request,jsonify
from datetime import date
from model.Model import db
import json

class Product(db.Model):
    __tablename__ = 'product'

    id = db.Column(db.String(1000000), nullable=False, primary_key=True)
    title = db.Column(db.String(1000000), nullable=False)
    price = db.Column(db.String(30), nullable=False)
    description = db.Column(db.String(30), nullable=False)
    category_id = db.Column(db.String(30), nullable=False)
    image = db.Column(db.String(1000000),nullable=False)
    qty =db.Column(db.String(),nullable=False)

    def __init__(self, id, title, price, description, category_id, image, qty):
        self.id = id
        self.title = title
        self.price = price
        self.description = description
        self.category_id = category_id
        self.image = image
        self.qty = qty

    def json(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "description": self.description,
            "category_id": self.category_id,
            "image": self.image,
            "qty": self.qty
        }

class ProductController(Resource):
    def get(self):        
        #get method
        json_data = request.get_json(force=True)
        data = self.getProductById(json_data)
        #print(json.dumps(data,default=str))
        return jsonify({"product": [product.json() for product in Product.query.all()]}), 200

    def post(self):
        #post method
        return {'status': 'success', 'data': "Post User login Controller"}, 200

    def getProductById(self,req):
        product = Product.query.filter_by(category_id = req["categoryid"])
        if product:
            print(product)
            return product
        # return 400


class RegisterController(Resource):
    def get(self):   
        #get method  
        return {'status': 'success', 'data': "Register user Controller"}, 200

    def post(self):
        #post method
        return {'status': 'success', 'data': "Post register User Controller"}, 200
