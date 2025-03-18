from flask import Flask, jsonify
import json

app = Flask(__name__)

# Load player data from teamData.json file
with open("teamData.json", "r") as file:
    team_data = json.load(file)

@app.route('/nba/teams/<teamName>')
def get_nba_team(teamName):
    if teamName in team_data:
        return jsonify(team_data[teamName])
    else:
        return jsonify({"error": "Team not found"})

if __name__ == "__main__":
    app.run(debug=True)

