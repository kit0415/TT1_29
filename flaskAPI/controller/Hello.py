from flask_restful import Resource
from flask import request,jsonify
from datetime import date
from model.Model import db
import json

class Hello(Resource):
    def get(self):
        conn = db.connect()
        cursor = conn.cursor()
        cursor.execute("""select * from tutorials""")
        rows = cursor.fetchall()
        print(rows)
        print(json.dumps(rows,default=str))
        return {'status': 'success', 'data': json.dumps(rows,default=str)}, 200

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        

        result = {
            "method":"post",
            "invokeDateTime": date.today()
        }

        return {"status": 'success', 'data': result}, 201

    def put(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        conn = db.connect()
        cursor = conn.cursor()
        cursor.execute("""select * from otg_demo_users""")
        rows = cursor.fetchall()
        print(rows)
       

        result = {
            "method":"put",
            "invokeDateTime": date.today()
        }

        return {"status": 'success', 'data': result}, 204

    def delete(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
      

        result = {
            "method":"delete",
            "invokeDateTime": date.today()
        }

        return {"status": 'success', 'data': result}, 204