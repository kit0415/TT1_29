from flask import Flask

def create_app(config_filename):
    app = Flask(__name__,instance_relative_config=True)
    app.config.from_object(config_filename)
    app.config.from_pyfile('config.py')

    from app import api_bp
    app.register_blueprint(api_bp,url_prefix='/api')

    from model.Model import db
    db.init_app(app)

    return app

if __name__ == "__main__":
    app = create_app("config")
    app.run(host='0.0.0.0' ,port=5001)