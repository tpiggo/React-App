from flask import jsonify
from backend.models import Appuser
from backend import app

@app.route("/", methods=["GET"])
def home():
    return jsonify({"data": "yo world"})

@app.route('/login', methods=["POST"])
def login():
    print("Got contacted")
    user = Appuser.query.find_one(uname=request.json['username'])
    print(user)
    if  user.verify_password(request.json['password']):
        print("successful login")
    else:
        print("login failed!")
    return jsonify(response="login failed")