from flask import jsonify
from backend import app

@app.route("/", methods=["GET"])
def home():
    return jsonify({"data": "yo world"})

