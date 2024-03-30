
from dotenv import load_dotenv 
import requests
import os
import json

load_dotenv()
API_TOKEN = os.getenv('API_TOKEN')
API_URL = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()

def get_response(user_input): 
	print(user_input)
	result = query({
		"inputs" : f" You are a intelligent chatbot that loves banter keep it under 50 words, {user_input} RESPONSE:",
	})
	index = result[0]['generated_text'].rfind('RESPONSE:')
	return result[0]['generated_text'][index + 9:]