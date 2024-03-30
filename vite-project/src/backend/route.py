from flask import Flask, jsonify, request
from flask_cors import CORS
from gpt import get_response

# Create an instance of Flask
app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    return jsonify(get_response(data))

# Run the server
if __name__ == '__main__':
    app.run(debug=True)

#cd into backend folder
#venv\Scripts\activate
#flask --app route run