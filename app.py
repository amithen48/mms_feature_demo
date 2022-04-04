import IPython
import json
from stix_shifter.stix_translation import stix_translation
from flask import Flask, request
from flask_cors import CORS


# create the application object
app = Flask(__name__)
CORS(app)


# turn string (data) into json
def get_ecs_json(data):
    j = json.loads(data)
    d = "[" + json.dumps(j["_source"]) + "]"
    return d


# on route "to_stix" recieve data from user and send back STIX json data
@app.route('/to_stix', methods=['POST', 'GET'])
def to_stix():
    if request.method == 'POST':

        data = request.data
        ecs_json = get_ecs_json(data)

        translation = stix_translation.StixTranslation()
        response = translation.translate(
            'elastic_ecs', 'results', "{\"type\": \"identity\", \"id\": \"identity--3532c56d-ea72-48be-a2ad-1a53f4c9c6d3\", \"name\": \"ECS\", \"identity_class\": \"events\"}", ecs_json)
        return json.dumps(response, indent=4)

    else:
        return "to_stix"


# on route "from_stix" recieve data from user and send back requested format json data
@app.route('/from_stix', methods=['POST', 'GET'])
def from_stix():
    if request.method == 'POST':

        data = request.data
        ecs_json = get_ecs_json(data)

        translation = stix_translation.StixTranslation()
        response = translation.translate(
            'elastic_ecs', 'query', "{\"type\": \"identity\", \"id\": \"identity--3532c56d-ea72-48be-a2ad-1a53f4c9c6d3\", \"name\": \"ECS\", \"identity_class\": \"events\"}", ecs_json)
        return json.dumps(response, indent=4)

    else:
        return "from_stix"


# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)
