from flask import jsonify, request
from flask import session
from sqlalchemy.orm.exc import NoResultFound
from backend.models import Appuser
from backend import app

@app.route("/", methods=["GET"])
def home():
    return jsonify({"data": "yo world"})

# Login route. Get the data out of the post and check db
@app.route('/login', methods=["POST"])
def login():
    print(request.json)
    try:
        user = Appuser.query.filter_by(uname=request.json['username']).one()
        if (user.verify_password(request.json['password'])):
            # Create the session!
            return jsonify({'response': "success", "status": 200, "data": user.uname, "session": 'abcd123'})
        else:
            return jsonify({"response": "Wrong username or password", "status": 501})
    except NoResultFound as error:
        return jsonify({"response": "Wrong username or password", "status" : 501})
    except Exception as error:
        print(error)
    return jsonify({"response": "Error"}, 500)