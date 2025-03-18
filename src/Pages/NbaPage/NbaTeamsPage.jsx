import React from "react";
import { useNavigate } from "react-router-dom";
import { TabList, Tabs, Tab } from "@chakra-ui/react";
// import "./NflTeamsPage.css";

const NbaTeamsPage = () => {
  const navigate = useNavigate();

  

  const teamsData = {
    Eastern_Conference: [
      { team: "Atlanta Hawks", wins: 50, losses: 32 },
      { team: "Boston Celtics", wins: 48, losses: 34 },
      { team: "Brooklyn Nets", wins: 60, losses: 22 },
      { team: "Charlotte Hornets", wins: 42, losses: 40 },
      { team: "Chicago Bulls", wins: 45, losses: 37 },
      { team: "Cleveland Cavaliers", wins: 35, losses: 47 },
      { team: "Detroit Pistons", wins: 38, losses: 44 },
      { team: "Indiana Pacers", wins: 41, losses: 41 },
      { team: "Miami Heat", wins: 55, losses: 27 },
      { team: "Milwaukee Bucks", wins: 65, losses: 17 },
      { team: "New York Knicks", wins: 30, losses: 52 },
      { team: "Orlando Magic", wins: 25, losses: 57 },
      { team: "Philadelphia 76ers", wins: 62, losses: 20 },
      { team: "Toronto Raptors", wins: 54, losses: 28 },
      { team: "Washington Wizards", wins: 38, losses: 44 },
    ],
    Western_Conference: [
      { team: "Dallas Mavericks", wins: 48, losses: 34 },
      { team: "Denver Nuggets", wins: 55, losses: 27 },
      { team: "Golden State Warriors", wins: 62, losses: 20 },
      { team: "Houston Rockets", wins: 41, losses: 41 },
      { team: "Los Angeles Clippers", wins: 58, losses: 24 },
      { team: "Los Angeles Lakers", wins: 45, losses: 37 },
      { team: "Memphis Grizzlies", wins: 51, losses: 31 },
      { team: "Minnesota Timberwolves", wins: 30, losses: 52 },
      { team: "New Orleans Pelicans", wins: 38, losses: 44 },
      { team: "Oklahoma City Thunder", wins: 22, losses: 60 },
      { team: "Phoenix Suns", wins: 55, losses: 27 },
      { team: "Portland Trail Blazers", wins: 40, losses: 42 },
      { team: "Sacramento Kings", wins: 33, losses: 49 },
      { team: "San Antonio Spurs", wins: 28, losses: 54 },
      { team: "Utah Jazz", wins: 64, losses: 18 },
    ],
  };

  // Function to handle navigation to another route
  const handleNavigate = (route) => {
    navigate(route);
  };

  // Function to handle navigation to individual team pages
  const handleNavigateToTeam = (team) => {
    navigate(`/nba/teams/${team.toLowerCase().replace(/\s/g, "_")}`); // Example route: '/nfl/teams/buffalo-bills'
  };

  return (
    <div className="tabs">
      <div className="tabs-box">
        <Tabs bg="white" borderRadius="10px">
          <TabList>
          <Tab
              value="Scores"
              label="Scores"
              style={{ width: "25%", fontWeight: "700" }}
              onClick={() => handleNavigate("/nba")}
            >
              Scores
            </Tab>
            <Tab
              value="Teams"
              label="Teams"
              style={{ width: "25%", fontWeight: "700" }}
              onClick={() => handleNavigate("/nbateams")}
            >
              Teams
            </Tab>
         
            <Tab
              value="Standings"
              label="Standings"
              style={{ width: "25%", fontWeight: "700" }}
              onClick={() => handleNavigate("/nbastandings")}
            >
              Standings
            </Tab>
            <Tab
              value="Stats"
              label="Stats"
              style={{ width: "25%", fontWeight: "700" }}
              onClick={() => handleNavigate("/stats")}
            >
              Stats
            </Tab>
          </TabList>
        </Tabs>
      </div>

      <div className="teams-table-container">
        <div  className="teams-column">
          {Object.entries(teamsData).slice(0,1).map(([division, teams]) => (
            <div key={division} className="division-teams">
              {/* <h2>{division.replace("_", " ")}</h2> */}
              <table>
                <thead>
                  <tr>
                    <th>{division.replace("_", " ")}</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((teamData, index) => (
                    <tr key={index} onClick={() => handleNavigateToTeam(teamData.team)}>
                      <td>{teamData.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      
        <div className="teams-column">
          {Object.entries(teamsData).slice(1).map(([division, teams]) => (
            <div key={division} className="division-teams">
              {/* <h2>{division.replace("_", " ")}</h2> */}
              <table>
                <thead>
                  <tr>
                    <th>{division.replace("_", " ")}</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((teamData, index) => (
                    <tr key={index} onClick={() => handleNavigateToTeam(teamData.team)}>
                      <td>{teamData.team}</td>
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

export default NbaTeamsPage;
