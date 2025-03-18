import * as React from "react";
import { TabList, Tabs } from "@chakra-ui/react"; //TabPanels,
import { Tab } from "@chakra-ui/react";
// import { Box } from "@chakra-ui/react";
import "./NbaPage.css";
import {  useNavigate} from "react-router-dom";

const nbaTeams = [
  "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "Los Angeles Clippers",
  "Los Angeles Lakers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Pelicans",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia 76ers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards",
];


const NbaGameData = [];

for (let i = 1; i <= 100; i++) {
  const team1Index = Math.floor(Math.random() * nbaTeams.length);
  let team2Index = Math.floor(Math.random() * nbaTeams.length);
  while (team2Index === team1Index) {
    team2Index = Math.floor(Math.random() * nbaTeams.length);
  }

  const team1 = nbaTeams[team1Index];
  const team2 = nbaTeams[team2Index];
  const team1Score = Math.floor(Math.random() * 10) + 1;
  const team2Score = Math.floor(Math.random() * 10) + 1;

  NbaGameData.push({
    id: i,
    team1,
    team2,
    team1score: team1Score,
    team2score: team2Score,
  });
}

console.log(NbaGameData);

const NbaPage = () => {
  const navigate = useNavigate(); // Access the navigate function

//   const [value, setValue] = React.useState("Scores");

//   const handleChangeTab = (newValue) => {
//     setValue(newValue);
//   };

  // Function to handle navigation to another route
  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="box">
      
      <div className="tabs-scores">
        <div>
        <Tabs bg="white" borderRadius="10px">
            <TabList>
         
               <Tab  
                value="Scores"
                label="Scores"
                style={{ width: "33%", fontWeight: "700" }}
                onClick={() => handleNavigate('/nba')} w="33%">Scores</Tab>
                 <Tab  
                value="Teams"
                label="Teams"
                style={{ width: "33%", fontWeight: "700" }}
                onClick={() => handleNavigate('/nbateams')} w="25%">Teams</Tab>
              <Tab  
                value="Standings"
                label="Standings"
                style={{ width: "33%", fontWeight: "700" }}
                onClick={() => handleNavigate('/nbastandings')} w="33%">Standings</Tab>
              <Tab  
                value="Stats"
                label="Stats"
                style={{ width: "33%", fontWeight: "700" }}
                onClick={() => handleNavigate('/nba')} w="33%">Stats</Tab>
            </TabList>
          </Tabs>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <div style={{ borderBottom: "1px solid gray", padding: "0 15px" }}>
              <h2 style={{ padding: "15px", fontWeight: "700" }}>Recent Games</h2>
            </div>
            <div className="Container_liveMatch">
            {NbaGameData.map((ele) => {
              // Sanitize team names to replace spaces with hyphens
              const sanitizedTeam1 = ele.team1.toLowerCase().replace(/\s+/g, '-');
              const sanitizedTeam2 = ele.team2.toLowerCase().replace(/\s+/g, '-');

         
              let src1 = `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/${sanitizedTeam1.replace(/\s/g, '-')}.svg`;
              let src2 = `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/${sanitizedTeam2.replace(/\s/g, '-')}.svg`;


                let team1 = (ele.team1);
                let team2 = (ele.team2);
                let score = ele.team1score;
                return (
                  <div key={ele.id} className="smallDivMatch">
                    <p style={{ fontWeight: "700", color: "crimson" }}>
                      Result
                    </p>
                    <p>
                      {ele.team1} vs {ele.team2}
                    </p>

                    <div>
                      <div>
                      <img
                        src={src1}
                        alt="logo"
                        className="logoClass"
                        style={{ width: "20px", height: "20px" }} // Adjust image size here
                      />
                        <p>{team1}</p>
                      </div>
                      <div>
                        {score + Math.floor(Math.random() * 6)}
                      </div>
                    </div>
                    <div>
                      <div>
                        <img src={src2} alt="flag" className="flagClass" />
                        <p>{team2}</p>
                      </div>
                      <div>
                        {score + Math.floor(Math.random() * 14)}
                      </div>
                    </div>
                    <p
                      style={{
                        borderBottom: "1px solid wheat",
                        padding: "8px 0px",
                      }}
                    >
                      {team1} Won the Game
                    </p>
                    <p>Today</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="Advertisement_container">
          
        </div>
      </div>
    </div>
  );
};

export default NbaPage;