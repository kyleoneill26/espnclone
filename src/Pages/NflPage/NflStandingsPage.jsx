import React from "react";
import { useNavigate } from "react-router-dom";
import { TabList, Tabs, Tab } from "@chakra-ui/react";
import "./NflStandingsPage.css";

const NflStandingsPage = () => {
  const navigate = useNavigate();

  // Sample standings data for each division
  const standingsData = {
    AFC_East: [
      { team: "Buffalo Bills", wins: 10, losses: 6 },
      { team: "Miami Dolphins", wins: 9, losses: 7 },
      { team: "New England Patriots", wins: 8, losses: 8 },
      { team: "New York Jets", wins: 3, losses: 13 },
    ],
    AFC_North: [
      { team: "Baltimore Ravens", wins: 11, losses: 5 },
      { team: "Cincinnati Bengals", wins: 10, losses: 6 },
      { team: "Cleveland Browns", wins: 9, losses: 7 },
      { team: "Pittsburgh Steelers", wins: 7, losses: 9 },
    ],
    AFC_South: [
      { team: "Houston Texans", wins: 4, losses: 12 },
      { team: "Indianapolis Colts", wins: 9, losses: 7 },
      { team: "Jacksonville Jaguars", wins: 2, losses: 14 },
      { team: "Tennessee Titans", wins: 12, losses: 4 },
    ],
    AFC_West: [
      { team: "Denver Broncos", wins: 7, losses: 9 },
      { team: "Kansas City Chiefs", wins: 12, losses: 4 },
      { team: "Las Vegas Raiders", wins: 10, losses: 6 },
      { team: "Los Angeles Chargers", wins: 9, losses: 7 },
    ],
    NFC_East: [
      { team: "Dallas Cowboys", wins: 12, losses: 4 },
      { team: "New York Giants", wins: 7, losses: 9 },
      { team: "Philadelphia Eagles", wins: 5, losses: 11 },
      { team: "Washington Football Team", wins: 6, losses: 10 },
    ],
    NFC_North: [
      { team: "Chicago Bears", wins: 6, losses: 10 },
      { team: "Detroit Lions", wins: 3, losses: 13 },
      { team: "Green Bay Packers", wins: 13, losses: 3 },
      { team: "Minnesota Vikings", wins: 8, losses: 8 },
    ],
    NFC_South: [
      { team: "Atlanta Falcons", wins: 7, losses: 9 },
      { team: "Carolina Panthers", wins: 5, losses: 11 },
      { team: "New Orleans Saints", wins: 9, losses: 7 },
      { team: "Tampa Bay Buccaneers", wins: 13, losses: 3 },
    ],
    NFC_West: [
      { team: "Arizona Cardinals", wins: 11, losses: 5 },
      { team: "Los Angeles Rams", wins: 12, losses: 4 },
      { team: "San Francisco 49ers", wins: 10, losses: 6 },
      { team: "Seattle Seahawks", wins: 6, losses: 10 },
    ],
  };
  

  // Function to handle navigation to another route
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
              onClick={() => handleNavigate('/nfl')}
            >Scores</Tab>
          <Tab
              value="Teams"
              label="Teams"
              style={{ width: "33%", fontWeight: "700" }}
              onClick={() => handleNavigate("/nflteams")}
            >
              Teams
            </Tab>
            <Tab
              value="Standings"
              label="Standings"
              style={{ width: "33%", fontWeight: "700" }}
              onClick={() => handleNavigate('/nflstandings')}
            >Standings</Tab>
            <Tab
              value="Stats"
              label="Stats"
              style={{ width: "33%", fontWeight: "700" }}
              onClick={() => handleNavigate('/nflstats')}
            >Stats</Tab>
          </TabList>
        </Tabs>
      </div>

      <div className="standings-table-container">
        <div bd="black" className="standings-column">
          {Object.entries(standingsData).slice(0, 4).map(([division, teams]) => (
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
          {Object.entries(standingsData).slice(4).map(([division, teams]) => (
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

export default NflStandingsPage;

