import React from "react";
import { useNavigate } from "react-router-dom";
import { TabList, Tabs, Tab } from "@chakra-ui/react";
// import "./NflTeamsPage.css";

const MlbTeamsPage = () => {
  const navigate = useNavigate();

  

  const teamsData = {
    AL_East: [
      { team: "Baltimore Orioles" },
      { team: "Boston Red Sox" },
      { team: "New York Yankees" },
      { team: "Tampa Bay Rays" },
      { team: "Toronto Blue Jays" },
    ],
    AL_Central: [
      { team: "Chicago White Sox" },
      { team: "Cleveland Guardians" },
      { team: "Detroit Tigers" },
      { team: "Kansas City Royals" },
      { team: "Minnesota Twins" },
    ],
    AL_West: [
      { team: "Houston Astros" },
      { team: "Los Angeles Angels" },
      { team: "Oakland Athletics" },
      { team: "Seattle Mariners" },
      { team: "Texas Rangers" },
    ],
    NL_East: [
      { team: "Atlanta Braves" },
      { team: "Miami Marlins" },
      { team: "New York Mets" },
      { team: "Philadelphia Phillies" },
      { team: "Washington Nationals" },
    ],
    NL_Central: [
      { team: "Chicago Cubs" },
      { team: "Cincinnati Reds" },
      { team: "Milwaukee Brewers" },
      { team: "Pittsburgh Pirates" },
      { team: "St. Louis Cardinals" },
    ],
    NL_West: [
      { team: "Arizona Diamondbacks" },
      { team: "Colorado Rockies" },
      { team: "Los Angeles Dodgers" },
      { team: "San Diego Padres" },
      { team: "San Francisco Giants" },
    ],
  };
  

  // Function to handle navigation to another route
  const handleNavigate = (route) => {
    navigate(route);
  };

  // Function to handle navigation to individual team pages
  const handleNavigateToTeam = (team) => {
    navigate(`/mlb/teams/${team.toLowerCase().replace(/\s/g, "_")}`); // Example route: '/nfl/teams/buffalo-bills'
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
              onClick={() => handleNavigate("/mlb")}
            >
              Scores
            </Tab>
            <Tab
              value="Teams"
              label="Teams"
              style={{ width: "25%", fontWeight: "700" }}
              onClick={() => handleNavigate("/mlbteams")}
            >
              Teams
            </Tab>
         
            <Tab
              value="Standings"
              label="Standings"
              style={{ width: "25%", fontWeight: "700" }}
              onClick={() => handleNavigate("/mlbstandings")}
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
          {Object.entries(teamsData).slice(0,3).map(([division, teams]) => (
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
          {Object.entries(teamsData).slice(3).map(([division, teams]) => (
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

export default MlbTeamsPage;
