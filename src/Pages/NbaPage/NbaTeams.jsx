import React from "react";
import { useParams } from "react-router-dom";
import NbateamData from "../NbaPage/NbaTeamData.json";
import './NbaTeams.css'; 
import { TabList, Tabs, Tab, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";




const NbaTeams = () => {
  const { teamName } = useParams();
  const team = NbateamData[teamName];
  const navigate = useNavigate();

  if (!team) {
    return <div className="error">Team data not found</div>;
  }
  console.log(teamName);

  // Function to group players by position
  const groupByPosition = (players) => {
    return players.reduce((acc, player) => {
      (acc[player.position] = acc[player.position] || []).push(player);
      return acc;
    }, {});
  };


  const positionOrder = ['', '', ''];


  const groupedPlayers = groupByPosition(team.roster);
  

  const sortedKeys = Object.keys(groupedPlayers).sort((a, b) => {
    return positionOrder.indexOf(a) - positionOrder.indexOf(b);
  });


  const handleNavigate = (route) => {
    navigate(route);
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
            onClick={() => handleNavigate('/nba')}
          >Scores</Tab>
        <Tab
            value="Teams"
            label="Teams"
            style={{ width: "33%", fontWeight: "700" }}
            onClick={() => handleNavigate("/nbateams")}
          >
            Teams
          </Tab>
          <Tab
            value="Standings"
            label="Standings"
            style={{ width: "33%", fontWeight: "700" }}
            onClick={() => handleNavigate('/nbastandings')}
          >Standings</Tab>
          <Tab
            value="Stats"
            label="Stats"
            style={{ width: "33%", fontWeight: "700" }}
            onClick={() => handleNavigate('/nbastats')}
          >Stats</Tab>
        </TabList>
      </Tabs>
    </div>
    <div className="container">
    <h1 className="header">{teamName.replace(/_/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase())}</h1>

      <p>City: {team.city}</p>
      <p>Conference: {team.conference}</p>
      <p>Division: {team.division}</p>
      <p>Head Coach: {team.coach}</p>
      <h2>Roster</h2>
      {sortedKeys.map(position => (
        <div key={position}>
          <h3>{position}</h3>
          <div className="grid-container">
            {groupedPlayers[position].map((player, index) => (
             <Link key={index} href={`https://www.lineups.com/nba/player-stats/${player.name.toLowerCase().replace(/ /g, '-')}/`} isExternal mt={2} className="player-card">
                <div>Name: {player.name}</div>
                <div>Position: {player.position}</div>
                <div>Number: {player.number}</div>
                <div>Age: {player.age}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default NbaTeams;