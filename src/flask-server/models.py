from app import db,ma
from datetime import datetime
from sqlalchemy import event

class EyeWear(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sphereLeft = db.Column(db.Float, nullable=False)
    sphereRight = db.Column(db.Float, nullable=False)
    ipdLeft = db.Column(db.Float, nullable=False)
    ipdRight = db.Column(db.Float, nullable=False)
    bridge = db.Column(db.Float, nullable=False)
    lens = db.Column(db.Float, nullable=False)
    temple = db.Column(db.Float, nullable=False)
    notes = db.Column(db.String(300))


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), primary_key=True)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.now)
    description = db.Column(db.Text, nullable=True)
    eyeWear = db.relationship('EyeWear', backref="post", lazy=True)
    eyeWear_id = db.Column(db.ForeignKey(EyeWear.id))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)    
    posts = db.relationship("Post", backref="user", lazy=True)
    
    def __repr__(self):
        return f"User('{self.username}, {self.email}')"

class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100),nullable=False)
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime(), default=datetime.utcnow)


    def __repr__(self):
        return "<Articles %r>" % self.title
# Generate marshmallow Schemas from your models
class ArticlesShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","title", "body", "date")
class UsersShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","username", "email", "password", "posts")
class EyeWearShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","sphereLeft", "sphereRight", "ipdLeft", "ipdRight"
        ,"bridge", "lens", "temple", "notes")
class PostShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","title", "date_posted", "description", "eyeWear"
        ,"eyeWear_id", "user_id",)

@event.listens_for(Articles.__table__, 'after_create')
def create_articles(*args, **kwargs):
    db.session.add(Articles(id=1, title='abc@domain.com', body="hello"))
    db.session.add(Articles(id=2, title='abcd@domain.com', body="helloo"))
    db.session.commit()

@event.listens_for(Post.__table__, 'after_create')
def create_posts(*args, **kwargs):
    db.session.add(Post(id=1, title = "this is a shitty glass", description= "this is lit", user_id=1))
    db.session.commit()

@event.listens_for(EyeWear.__table__, 'after_create')
def create_eyewear(*args, **kwargs):
    db.session.add(EyeWear(id=1, sphereLeft = 12, sphereRight= -12,
    ipdLeft=0,ipdRight=0,bridge=0,lens=0,temple=0,notes="these suck"))
    db.session.commit()
@event.listens_for(User.__table__, 'after_create')
def create_users(*args, **kwargs):
    
    db.session.add(User(id=1, username = "asd", email= "sadsa", password="asd"))
    db.session.commit()



article_schema = ArticlesShema()
articles_schema = ArticlesShema(many=True)

user_schema = UsersShema()
users_schema = UsersShema(many=True)

eyewear_schema = EyeWearShema()
eyewears_schema = EyeWearShema(many=True)

post_schema = EyeWearShema()
posts_schema = EyeWearShema(many=True)