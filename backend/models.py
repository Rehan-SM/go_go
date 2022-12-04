from backend import db

match_player = db.Table(
    'match_player',
    db.Column('match_id', db.Integer, db.ForeignKey('match.id')),
    db.Column('player_id', db.Integer, db.ForeignKey('user.id'))
)

match_game = db.Table(
    'match_game',
    db.Column('match_id', db.Integer, db.ForeignKey('match.id')),
    db.Column('game_id', db.Integer, db.ForeignKey('game.id'))
)


class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    catch_phrase = db.Column(db.String(100))
    age = db.Column(db.Integer)
    gaming_base = db.Column(db.String(100))
    # match_id = db.Column(db.Integer, db.ForeignKey('match.id'))

    def __repr__(self):
        return f"User ('{self.user_name}', '{self.email}', '{self.age}')"


class Match(db.Model):
    __tablename__ = 'match'

    id = db.Column(db.Integer, primary_key=True)

    # Relationships
    player = db.relationship("User", secondary=match_player, backref="matchs")
    game = db.relationship("Game", secondary=match_game, backref="games")

    wins = db.Column(db.Integer)
    losses = db.Column(db.Integer)
    score = db.Column(db.Integer)

    def __repr__(self):
        return f"Match ('{self.player}', '{self.score}')"


class Game(db.Model):
    __tablename__ = 'game'

    id = db.Column(db.Integer, primary_key=True)

    # components
    name = db.Column(db.String())
    description = db.Column(db.String())
