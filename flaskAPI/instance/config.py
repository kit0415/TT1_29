import os

#creating connection object
basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_ECHO = False
SQLALCHEMY_TRACK_MODIFICATIONS = True
#SQLALCHEMY_DATABASE_URI = "sqlite:///SecureVision.db"
DEBUG = True
SECRET_KEY = "o1YqEK2zXmPn83WsxVGnIfS9PhhGGqF0"
#connection = pypyodbc.connect("Driver={SQL Server};Server=desktop-h2vit3p;Database=SecureVision;Integrated Security=True;")\
JSONIFY_PRETTYPRINT_REGULAR = False
CORS_HEADERS = 'Content-Type'

MYSQL_DATABASE_USER = 'remoteUser'
MYSQL_DATABASE_PASSWORD = '123456'
MYSQL_DATABASE_DB = 'ecommerce'
MYSQL_DATABASE_HOST = 'localhost'

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{}:{}@{}:{}/{}'.format(MYSQL_DATABASE_USER,MYSQL_DATABASE_PASSWORD,MYSQL_DATABASE_HOST,3306,MYSQL_DATABASE_DB)
print(SQLALCHEMY_DATABASE_URI)

