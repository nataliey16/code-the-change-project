from flask import current_app,jsonify,request
from app import create_app,db
from models import Articles, EyeWear, Post, User,articles_schema, users_schema,user_schema, eyewears_schema, posts_schema

# Create an application instance
app = create_app()

with app.app_context():
	db.create_all()

# Define a route to fetch the avaialable articles

@app.route("/articles", methods=["GET"], strict_slashes=False)
def articles():

	articles = Articles.query.all()
	
	results = articles_schema.dump(articles)

	return jsonify(results)

@app.route("/users", methods=["GET"], strict_slashes=False)
def users():

	users = User.query.all()
	
	results = users_schema.dump(users)

	return jsonify(results)

@app.route("/user", methods=["GET"], strict_slashes=False)
def user():
	user = User.query.first()
	#🃏
	results = user_schema.dump(user.__dict__)
	
	return jsonify(results)


@app.route("/eyewear", methods=["GET"], strict_slashes=False)
def eyewear():

	eyewear = EyeWear.query.all()
	
	results = eyewears_schema.dump(eyewear)

	return jsonify(results)

@app.route("/posts", methods=["GET"], strict_slashes=False)
def posts():
	#🐔
	posts = Post.query.all()
	print(posts[0].__dict__)
	
	results = posts_schema.dump(posts)
	print(results)
	return (Post.query.first().description)


if __name__ == "__main__":
	app.run(debug=True)