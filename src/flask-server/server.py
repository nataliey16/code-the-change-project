from flask import current_app,jsonify,request
from app import create_app,db
import eyeExam
from models import Articles, EyeWear, Post, User,articles_schema, users_schema,user_schema, eyewears_schema, posts_schema
from eyewearSimilarity import *
import json
import speech_recognition as sr
import soundfile
import moviepy.editor as moviepy


# Create an application instance
app = create_app()

with app.app_context():
	db.create_all()

# Define a route to fetch the avaialable articles

eye1 = EyeWearInformation(-1,-1.5,64,22,49,150)
eye2 = EyeWearInformation(-1.5,-1.75,64,24,53,155)
print(SimilarityOfEyewear(eye1, eye2))

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

@app.route("/exam", methods=['POST', 'GET'])
def exam():
	all = [""]

	if request.method == "POST":
		f = request.files['file']
		with open('audio.wav', 'wb') as audio:
			f.save(audio)
		
		moviepy.ffmpeg_tools.ffmpeg_extract_audio("audio.wav", "new.wav")

		r = sr.Recognizer()
		
		with sr.AudioFile('new.wav') as source:
			r.adjust_for_ambient_noise(source)
			audio_text = r.listen(source, timeout=None)
			print(audio_text)
			try:
				result = r.recognize_google(audio_text,language="en")
				print(result)
				all.append(result)
				
			except:
				print("try again")
	print(all)
	score = eyeExam.getScoresFromInput(all[-1])
	print(score) 
	return json.dumps(score)

@app.route("/eyewear", methods=["GET", "POST"], strict_slashes=False)
def eyewear():
	eyewear = EyeWear.query.all()
	for glass in eyewear:
		glassDict = glass.__dict__
		print(glassDict)
	if request.method == "GET":
		eyewear = EyeWear.query.all()
		
		results = eyewears_schema.dump(eyewear)
		print(results)
		print(jsonify(results))
		return jsonify(results)
	else:
		print('hi')
		print(request.get_json())
		eyewear = EyeWear.query.all()
		glassDictList = []
		for glass in eyewear:
			glassDict = glass.__dict__
			eye1 = EyeWearInformation(glassDict["sphereLeft"],glassDict["sphereRight"],glassDict["ipdLeft"] + glassDict["ipdRight"],glassDict["lens"],glassDict["bridge"],glassDict["temple"])
			eye2 = EyeWearInformation(float(request.get_json()["sphereLeft"]),float(request.get_json()["sphereRight"]),float(request.get_json()["ipdLeft"]) + float(request.get_json()["ipdRight"]),float(request.get_json()["lens"]),float(request.get_json()["bridge"]),float(request.get_json()["temple"]))
			glassDict["similarity"] = SimilarityOfEyewear(eye1, eye2)
			del glassDict["_sa_instance_state"]
			glassDictList.append(glassDict)
			print(glassDict)
		return json.dumps(glassDictList)

@app.route("/uploadGlasses", methods=["POST"])
def uploadGlasses():
	db.session.add(EyeWear(sphereLeft = float(request.form.get('sphereLeft')), sphereRight= float(request.form.get('sphereRight')),
    ipdLeft=float(request.form.get('ipdLeft')),ipdRight=float(request.form.get('ipdRight')),bridge=float(request.form.get('bridge')),lens=float(request.form.get('lens')),temple=float(request.form.get('temple')),notes="3km away", price=9.99))
	resp = jsonify(success=True)
	db.session.commit()
	return resp
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