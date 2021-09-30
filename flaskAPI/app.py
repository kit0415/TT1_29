from flask import Blueprint
from flask_restful import Api
#from controller.Category import CategoryResource
from controller.UserController import LoginController,RegisterController,LogoutController
from controller.ProductController import ProductController
from controller.Hello import Hello


api_bp = Blueprint('api',__name__)
api = Api(api_bp)


#Routes
api.add_resource(Hello,'/Hi')
api.add_resource(LoginController,'/login')
api.add_resource(RegisterController,'/register')
api.add_resource(LogoutController,'/logout')

api.add_resource(ProductController,'/product')
#api.add_resource(CategoryResource,'/Category')