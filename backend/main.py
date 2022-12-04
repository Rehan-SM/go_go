from flask import Blueprint, jsonify
from backend import db
from models import User, Match, Game
import time

main = Blueprint('main', __name__)


@main.route('/api/record')
def record_score():

    return jsonify({
        "None": "None"
    })


@main.route('/api/scoreboard')
def scoreboard():
    return 'Score'


@main.route('/api/homepage')
def home():
    return 'Home'


@main.route('/api/profile/<user1>')
def profile(user1):
    print(user1)

    user1_profile = db.session.query(User).filter(User.email == user1).first()

    user1_score = db.session.query(Match).filter(
        Match.player == user1_profile.id).first()

    time.sleep(10)

    return jsonify({'user': user1_profile.user_name,
                   'tagline': user1_profile.catch_phrase,
                    'age': user1_profile.age,
                    'gamingbase': user1_profile.gaming_base,
                    'score': user1_score.score,
                    'wins': user1_score.wins,
                    'losses': user1_score.losses})
