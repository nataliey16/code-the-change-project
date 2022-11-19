from app import db,ma
from datetime import datetime
from sqlalchemy import event

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

@event.listens_for(Articles.__table__, 'after_create')
def create_articles(*args, **kwargs):
    db.session.add(Articles(id=1, title='abc@domain.com', body="hello"))
    db.session.add(Articles(id=2, title='abcd@domain.com', body="helloo"))
    db.session.commit()


article_schema = ArticlesShema()
articles_schema = ArticlesShema(many=True)