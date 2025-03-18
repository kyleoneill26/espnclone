// import * as React from "react";
// import { TabList, Tabs } from "@chakra-ui/react"; //TabPanels,
// import { Tab } from "@chakra-ui/react";
// import { Box } from "@chakra-ui/react";
// import "./NflPage.css";

// const nflTeams = [
//   "Arizona Cardinals",
//   "Atlanta Falcons",
//   "Baltimore Ravens",
//   "Buffalo Bills",
//   "Carolina Panthers",
//   "Chicago Bears",
//   "Cincinnati Bengals",
//   "Cleveland Browns",
//   "Dallas Cowboys",
//   "Denver Broncos",
//   "Detroit Lions",
//   "Green Bay Packers",
//   "Houston Texans",
//   "Indianapolis Colts",
//   "Jacksonville Jaguars",
//   "Kansas City Chiefs",
//   "Las Vegas Raiders",
//   "Los Angeles Chargers",
//   "Los Angeles Rams",
//   "Miami Dolphins",
//   "Minnesota Vikings",
//   "New England Patriots",
//   "New Orleans Saints",
//   "New York Giants",
//   "New York Jets",
//   "Philadelphia Eagles",
//   "Pittsburgh Steelers",
//   "San Francisco 49ers",
//   "Seattle Seahawks",
//   "Tampa Bay Buccaneers",
//   "Tennessee Titans",
//   "Washington Football Team",
// ];

// const teamAbbreviations = {
//   "Arizona Cardinals": "ARI",
//   "Atlanta Falcons": "ATL",
//   "Baltimore Ravens": "BAL",
//   "Buffalo Bills": "BUF",
//   "Carolina Panthers": "CAR",
//   "Chicago Bears": "CHI",
//   "Cincinnati Bengals": "CIN",
//   "Cleveland Browns": "CLE",
//   "Dallas Cowboys": "DAL",
//   "Denver Broncos": "DEN",
//   "Detroit Lions": "DET",
//   "Green Bay Packers": "GB",
//   "Houston Texans": "HOU",
//   "Indianapolis Colts": "IND",
//   "Jacksonville Jaguars": "JAX",
//   "Kansas City Chiefs": "KC",
//   "Las Vegas Raiders": "LV",
//   "Los Angeles Chargers": "LAC",
//   "Los Angeles Rams": "LAR",
//   "Miami Dolphins": "MIA",
//   "Minnesota Vikings": "MIN",
//   "New England Patriots": "NE",
//   "New Orleans Saints": "NO",
//   "New York Giants": "NYG",
//   "New York Jets": "NYJ",
//   "Philadelphia Eagles": "PHI",
//   "Pittsburgh Steelers": "PIT",
//   "San Francisco 49ers": "SF",
//   "Seattle Seahawks": "SEA",
//   "Tampa Bay Buccaneers": "TB",
//   "Tennessee Titans": "TEN",
//   "Washington Football Team": "WAS",
// };

// const getTeamLogoSrc = (teamName) => {
//   const abbreviation = teamAbbreviations[teamName];
//   return `https://github.com/nflverse/nflverse-pbp/raw/master/wordmarks/${abbreviation}.png`;
// };

// const NflGameData = [];

// for (let i = 1; i <= 20; i++) {
//   const team1Index = Math.floor(Math.random() * nflTeams.length);
//   let team2Index = Math.floor(Math.random() * nflTeams.length);
//   while (team2Index === team1Index) {
//     team2Index = Math.floor(Math.random() * nflTeams.length);
//   }

//   const team1 = nflTeams[team1Index];
//   const team2 = nflTeams[team2Index];
//   const team1Abbreviation = nflTeams[team1Index];
//   const team2Abbreviation = nflTeams[team2Index];
//   const team1Score = Math.floor(Math.random() * 10) + 1;
//   const team2Score = Math.floor(Math.random() * 10) + 1;

//   NflGameData.push({
//     id: i,
//     team1,
//     team2,
//     team1Abbreviation,
//     team2Abbreviation,
//     team1score: team1Score,
//     team2score: team2Score,
//   });
// }

// console.log(NflGameData);

// const NflPage = () => {
//   const [value, setValue] = React.useState("one");

//   const handleChangeTab = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className="MainDiv_live">
//       <div className="container_liveDiv">
//         <div>
//           <Box
//             display="flex"
//             sx={{ width: "100%", margin: "0px" }}
//             style={{ backgroundColor: "white", borderRadius: "10px" }}
//           >
//             <Tabs
//               value={value}
//               onChange={handleChangeTab}
//               aria-label="wrapped label tabs example"
//             >
//               <Tab
//                 value="one"
//                 label="Live"
//                 style={{ width: "33%", fontWeight: "700" }}
//               />
//               <Tab
//                 value="two"
//                 label="Upcoming "
//                 style={{ width: "33%", fontWeight: "700" }}
//               />
//               <Tab
//                 value="three"
//                 label="Results"
//                 style={{ width: "33%", fontWeight: "700" }}
//               />
//             </Tabs>
//           </Box>
//           <Tabs bg="white" borderRadius="10px">
//             <TabList>
//               <Tab w="33%">Scores</Tab>
//               <Tab w="33%">Standings</Tab>
//               <Tab w="33%">Stats</Tab>
//             </TabList>
//           </Tabs>
//           <div
//             style={{
//               backgroundColor: "white",
//               borderRadius: "10px",
//             }}
//           >
//             <div style={{ borderBottom: "1px solid gray", padding: "0 15px" }}>
//               <h2 style={{ padding: "15px", fontWeight: "700" }}>Recent Games</h2>
//             </div>
//             <div className="Container_liveMatch">
//               {NflGameData.map((ele) => {
//                 const src1 = getTeamLogoSrc(ele.team1);
//                 const src2 = getTeamLogoSrc(ele.team2);

//                 const team1 = ele.team1;
//                 const team2 = ele.team2;
              
//                 const score = ele.team1score;
//                 return (
//                   <div key={ele.id} className="smallDivMatch">
//                     <p style={{ fontWeight: "700", color: "crimson" }}>
//                       Result
//                     </p>
//                     <p>
//                       {ele.team1Abbreviation} vs {ele.team2Abbreviation}
//                     </p>
//                     <div>
//                       <div>
//                         <img
//                           src={src1}
//                           alt="logo"
//                           className="logoClass"
//                           style={{ width: "20px", height: "20px" }} // Adjust image size here
//                         />
//                         <p>{team1}</p>
//                       </div>
//                       <div>
//                         {score + Math.floor(Math.random() * 6)}
//                       </div>
//                     </div>
//                     <div>
//                       <div>
//                         <img
//                           src={src2}
//                           alt="flag"
//                           className="flagClass"
//                           style={{ width: "20px", height: "20px" }} // Adjust image size here
//                         />
//                         <p>{team2}</p>
//                       </div>
//                       <div>
//                         {score + Math.floor(Math.random() * 6)}
//                       </div>
//                     </div>
//                     <p
//                       style={{
//                         borderBottom: "1px solid wheat",
//                         padding: "8px 0px",
//                       }}
//                     >
//                       {team1} Won the Game
//                     </p>
//                     <p>Today</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="Advertisement_container">
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NflPage;
