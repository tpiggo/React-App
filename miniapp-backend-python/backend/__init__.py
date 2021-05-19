from flask import Flask
from backend.models import db, Appuser
"""
Init file for the app. Start the app and manage it state from here.

"""

POSTGRES = {
    'user': 'postgres',
    'pw': 'Arya5214',
    'db': 'testwebapp',
    'host': 'localhost',
    'port': '5432',
}

mock_users = [
    {
        "username": "tpig",
        "password": "pass123",
        "email" : "fakeemail2@hotmail.com"
    },
    {
        "username": "user2",
        "password": "abcd321",
        "email" : "fakeemail4@hotmail.com"
    },
    {
        "username": "user3",
        "password": "defg456",
        "email" : "fakeemail3@hotmail.com"
    },
    {
        "username": "fazeclan",
        "password": "jklmnop12",
        "email" : "fakeemail1@hotmail.com"
    }
]

app = Flask(__name__)
# Configuring the database access
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\
%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# start the database
db.init_app(app)
def addUsers(users: list):
    new_users = []
    for user in users:
        new_user = Appuser(uname=user['username'], password=user['password'], email=user['email'])
        print(new_user.verify_password(user['password']))
        new_users.append(new_user)
    print(new_users)
    db.session.add_all(new_users)
    db.session.commit()

with app.app_context():
    # Create the mock users if there are none
    if (Appuser.query.filter_by(uname=mock_users[0]['username']).all() == []):
        addUsers(mock_users)


from backend import routes


