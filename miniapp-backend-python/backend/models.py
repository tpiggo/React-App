from flask_sqlalchemy import SQLAlchemy
import bcrypt

db = SQLAlchemy()

class Appuser(db.Model):
    id = db.Column(db.BigInteger, primary_key=True)
    uname = db.Column(db.String(50), nullable = False, unique=True)
    email = db.Column(db.String(255), nullable = False, unique=True)
    upass = db.Column(db.String(50), nullable=False)

    def __repr__(self):
            return "<AppUser: %r %r %r>" % (
                self.id,
                self.uname,
                self.upass
            )

    @property
    def password(self):
        raise AttributeError('password not readable')
    
    @password.setter
    def password(self, password: str):
        hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        self.upass = hashed.decode('utf-8')

    def verify_password(self, password: str):
        return bcrypt.checkpw(password.encode(), self.upass.encode())