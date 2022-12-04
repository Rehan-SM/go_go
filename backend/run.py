from backend import app
from backend.auth import auth as auth_blueprint
from backend.main import main as main_blueprint

if __name__ == "__main__":
    app.register_blueprint(auth_blueprint)
    app.register_blueprint(main_blueprint)
    app.run(debug=True, host='192.168.1.26')
