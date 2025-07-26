from flask import Flask, jsonify, request
from flask_restful import reqparse, Api
import json

from utils.data_handling import handle_data
from utils.data_handling.movement import Movement

app = Flask(__name__)

@app.route("/utils/statistics", methods=['POST'])
def home():
    movements_list = []
    movement_data = json.loads(request.get_data())
    for movement in movement_data:
        movements_list.append(Movement(**movement))
    return handle_data(movements_list)

if __name__ == "__main__":
    app.run(debug=True)