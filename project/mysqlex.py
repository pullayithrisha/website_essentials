import mysql.connector
from flask import Flask, jsonify, render_template

app = Flask(__name__,template_folder=r'E:\project')
def index():
    return render_template('quiz.html')

# Connect to your MySQL database
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="9899",
    database="quiz_db"
)

# Endpoint to fetch questions from the database
@app.route('/get_questions', methods=['GET'])
def get_questions_from_db():
    cursor = mydb.cursor(dictionary=True)
    cursor.execute("SELECT * FROM questions")
    questions1 = cursor.fetchall()
    return jsonify({'questions': questions1})

if __name__ == '__main__':
    app.run(debug=True)
