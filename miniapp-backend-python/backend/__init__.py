from flask import Flask
"""
Init file for the app. Start the app and manage it state from here.

"""
app = Flask(__name__)

wsgi_app = app.wsgi_app

from backend import routes