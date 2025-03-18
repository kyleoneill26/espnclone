import React from "react";
import { useNavigate } from "react-router-dom";
import { TabList, Tabs, Tab } from "@chakra-ui/react";
import "./NflTeamsPage.css";

const NflTeamsPage = () => {
  const navigate = useNavigate();

  

  const teamsData = {
    AFC_East: [
      { team: "Buffalo Bills" },
      { team: "Miami Dolphins"},
      { team: "New England Patriots" },
      { team: "New York Jets" },
    ],
    AFC_North: [
      { team: "Baltimore Ravens"},
      { team: "Cincinnati Bengals" },
      { team: "Cleveland Browns"},
      { team: "Pittsburgh Steelers" },
    ],
    AFC_South: [
      { team: "Houston Texans" },
      { team: "Indianapolis Colts" },
      { team: "Jacksonville Jaguars" },
      { team: "Tennessee Titans"},
    ],
    AFC_West: [
      { team: "Denver Broncos"},
      { team: "Kansas City Chiefs" },
      { team: "Las Vegas Raiders" },
      { team: "Los Angeles Chargers" },
    ],
    NFC_East: [
      { team: "Dallas Cowboys"},
      { team: "New York Giants" },
      { team: "Philadelphia Eagles" },
      { team: "Washington Football Team" },
    ],
    NFC_North: [
      { team: "Chicago Bears" },
      { team: "Detroit Lions" },
      { team: "Green Bay Packers" },
      { team: "Minnesota Vikings" },
    ],
    NFC_South: [
      { team: "Atlanta Falcons" },
      { team: "Carolina Panthers" },
      { team: "New Orleans Saints" },
      { team: "Tampa Bay Buccaneers" },
    ],
    NFC_West: [
      { team: "Arizona Cardinals" },
      { team: "Los Angeles Rams" },
      { team: "San Francisco 49ers" },
      { team: "Seattle Seahawks" },
    ],
  };

  // Function to handle navigation to another route
  const handleNavigate = (route) => {
    navigate(route);
  };

  // Function to handle navigation to individual team pages
  const handleNavigateToTeam = (team) => {
    navigate(`/nfl/teams/${team.toLowerCase().replace(/\s/g, "_")}`); // Example route: '/nfl/teams/buffalo-bills'
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
                onClick={() => handleNavigate('/nfl')} w="25%">Scores</Tab>
            <Tab  
                value="Teams"
                label="Teams"
                style={{ width: "33%", fontWeight: "700" }}
                onClick={() => handleNavigate('/nflteams')} w="25%">Teams</Tab>
          
            
              <Tab  
                value="Standings"
                label="Standings"
                style={{ width: "33%", fontWeight: "700" }}
                onClick={() => handleNavigate('/nflstandings')} w="25%">Standings</Tab>
              <Tab  
                value="Stats"
                label="Stats"
                style={{ width: "33%", fontWeight: "700" }}
                onClick={() => handleNavigate('/nflstats')} w="25%">Stats</Tab>
            </TabList>
          </Tabs>
      </div>

      <div className="teams-table-container">
        <div  className="teams-column">
          {Object.entries(teamsData).slice(0,4).map(([division, teams]) => (
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
          {Object.entries(teamsData).slice(4).map(([division, teams]) => (
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

export default NflTeamsPage;


