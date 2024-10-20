import http.server
import ssl
import json
from pymongo import MongoClient

# MongoDB connection details
client = MongoClient("mongodb+srv://amirkhabaza:root@arhackaton.mmr1m.mongodb.net/?retryWrites=true&w=majority&tls=true")
db = client['datastore']  # Replace with your database name
collection = db['data']  # Replace with your collection name

# Query the MongoDB collection and acquire data
def fetch_data_from_mongo():
    data = list(collection.find({}))  # Fetch all documents, or specify a query if needed
    # print(data)
    for item in data:
        item['_id'] = str(item['_id'])  # Convert ObjectId to string for JSON serialization
    return data

# Save the data to a JSON file
def save_data_to_json(data, file_name='locations.json'):
    with open(file_name, 'w') as json_file:
        json.dump(data, json_file, indent=4)
    print(f"Data saved to {file_name}")

# Create an instance of the HTTP server
httpd = http.server.HTTPServer(('0.0.0.0', 8000), http.server.SimpleHTTPRequestHandler)

# Create an SSL context
context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
context.load_cert_chain(certfile='cert.pem', keyfile='key.pem')

# Wrap the server socket with the SSL context
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

# Fetch data from MongoDB and save it to a JSON file
print('fetching from mongo')
data = fetch_data_from_mongo()

print('saving?')
save_data_to_json(data)

print("Serving on https://0.0.0.0:8000")
httpd.serve_forever()
