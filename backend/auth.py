from flask import Blueprint, request, redirect, Response, jsonify
from flask import session as sesh
from backend import db
from models import User, Match
from sqlalchemy import update

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['POST'])
def login():
    email = request.json['username']
    password = request.json['password']

    value = db.session.query(User).filter(User.email == email)

    if value[0].password == password:
        return jsonify({'Validation': 'True', 'User': email})
    else:
        return jsonify({'Validation': 'False'})


@auth.route('/signup', methods=['POST'])
def signup_post():
    user_name = request.json['userName']
    email = request.json['email']
    password = request.json['password']
    confirm_password = request.json['confirmPassword']

    new_user = User(email=email, user_name=user_name, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'Name': 'Rehan'})


@auth.route('/profile', methods=['POST'])
def profile_post():
    catch_phrase = request.json['catchPhrase']
    age = request.json['age']
    gaming_base = request.json['gamingBase']

    db.session.query(User).filter(User.catch_phrase == "").update({"catch_phrase": catch_phrase,
                                                                   "age": age, "gaming_base": gaming_base})

    db.session.commit()

    return jsonify({'Name': 'Rehan'})


@auth.route('/logout')
def logout():
    return 'Logout'
