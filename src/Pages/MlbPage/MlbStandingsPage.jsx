import React from "react";
import { useNavigate } from "react-router-dom";
import { TabList, Tabs, Tab } from "@chakra-ui/react";
import "./MlbStandingsPage.css";


const MlbStandingsPage = () => {
  const navigate = useNavigate();

const standingsData = {
  AL_East: [
    { team: "Baltimore Orioles", wins: 90, losses: 72 },
    { team: "Boston Red Sox", wins: 95, losses: 67 },
    { team: "New York Yankees", wins: 92, losses: 70 },
    { team: "Tampa Bay Rays", wins: 100, losses: 62 },
    { team: "Toronto Blue Jays", wins: 88, losses: 74 },
  ],
  AL_Central: [
    { team: "Chicago White Sox", wins: 95, losses: 67 },
    { team: "Cleveland Guardians", wins: 80, losses: 82 },
    { team: "Detroit Tigers", wins: 75, losses: 87 },
    { team: "Kansas City Royals", wins: 70, losses: 92 },
    { team: "Minnesota Twins", wins: 68, losses: 94 },
  ],
  AL_West: [
    { team: "Houston Astros", wins: 100, losses: 62 },
    { team: "Los Angeles Angels", wins: 84, losses: 78 },
    { team: "Oakland Athletics", wins: 90, losses: 72 },
    { team: "Seattle Mariners", wins: 85, losses: 77 },
    { team: "Texas Rangers", wins: 75, losses: 87 },
  ],
  NL_East: [
    { team: "Atlanta Braves", wins: 92, losses: 70 },
    { team: "Miami Marlins", wins: 80, losses: 82 },
    { team: "New York Mets", wins: 88, losses: 74 },
    { team: "Philadelphia Phillies", wins: 85, losses: 77 },
    { team: "Washington Nationals", wins: 84, losses: 78 },
  ],
  NL_Central: [
    { team: "Chicago Cubs", wins: 93, losses: 69 },
    { team: "Cincinnati Reds", wins: 87, losses: 75 },
    { team: "Milwaukee Brewers", wins: 95, losses: 67 },
    { team: "Pittsburgh Pirates", wins: 70, losses: 92 },
    { team: "St. Louis Cardinals", wins: 88, losses: 74 },
  ],
  NL_West: [
    { team: "Arizona Diamondbacks", wins: 75, losses: 87 },
    { team: "Colorado Rockies", wins: 65, losses: 97 },
    { team: "Los Angeles Dodgers", wins: 105, losses: 57 },
    { team: "San Diego Padres", wins: 100, losses: 62 },
    { team: "San Francisco Giants", wins: 98, losses: 64 },
  ],
};

const handleNavigate = (route) => {
    navigate(route);
  };

  const sortTeamsByWins = (teams) => {
    return teams.sort((a, b) => b.wins - a.wins);
  };

 return (
    <div className="tabs">
      <div className="tabs-box">
        <Tabs bg="white" borderRadius="10px">
          <TabList>
            <Tab
              value="Scores"
              label="Scores"
              style={{ width: "33%", fontWeight: "700" }}
              onClick={() => handleNavigate('/mlb')}
            >Scores
            </Tab>
                  <Tab
              value="Teams"
              label="Teams"
              style={{ width: "33%", fontWeight: "700" }}
              onClick={() => handleNavigate("/mlbteams")}
            >
              Teams
              </Tab>
            <Tab
              value="Standings"
              label="Standings"
              style={{ width: "33%", fontWeight: "700" }}
              onClick={() => handleNavigate('/mlbstandings')}
            >Standings
            </Tab>
            <Tab
              value="Stats"
              label="Stats"
              style={{ width: "33%", fontWeight: "700" }}
              onClick={() => handleNavigate('/mlbstats')}
            >Stats</Tab>
          </TabList>
        </Tabs>
      </div>

      <div className="standings-table-container">
        <div bd="black" className="standings-column">
          {Object.entries(standingsData).slice(0, 3).map(([division, teams]) => (
            <div key={division} className="division-standings">
              <h2>{division.replace("_", " ")}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Wins</th>
                    <th>Losses</th>
                  </tr>
                </thead>
                <tbody>
                {sortTeamsByWins(teams).map((teamData, index) => (
                    <tr key={index}>
                      <td>{teamData.team}</td>
                      <td>{teamData.wins}</td>
                      <td>{teamData.losses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <div className="standings-column">
          {Object.entries(standingsData).slice(3).map(([division, teams]) => (
            <div key={division} className="division-standings">
              <h2>{division.replace("_", " ")}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Wins</th>
                    <th>Losses</th>
                  </tr>
                </thead>
                <tbody>
                {sortTeamsByWins(teams).map((teamData, index) => (
                    <tr key={index}>
                      <td>{teamData.team}</td>
                      <td>{teamData.wins}</td>
                      <td>{teamData.losses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MlbStandingsPage;
