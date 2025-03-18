import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import statsData from '../NflPage/StatsData.json'; 
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import './NflStatsPage.css'; 
import { TabList, Tabs, Tab } from "@chakra-ui/react";

export const NflStatsPage = () => {
  const [sortConfig, setSortConfig] = useState({ category: null, key: null, direction: 'ascending' });

  const requestSort = (category, key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending' && sortConfig.category === category) {
      direction = 'descending';
    }
    setSortConfig({ category, key, direction });
  };

  const sortedItems = (items, category) => {
    let sortableItems = [...items];
    if (sortConfig.category === category && sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  };
  
    const navigate = useNavigate();

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
    <div className="stats-container">
      {['PassingLeaders', 'RushingLeaders', 'ReceivingLeaders'].map(category => (
        <Box className="category-box" key={category}>
          <Heading className="category-heading">{category.replace('Leaders', '')} Leaders</Heading>
          <Button onClick={() => requestSort(category, 'yards')}>Sort by Yards</Button>
          <Button onClick={() => requestSort(category, 'touchdowns')}>Sort by TDs</Button>
          {sortedItems(statsData[category], category).map(player => (
            <Flex justifyContent="space-between" key={player.name} className="stat-item">
              <div className='team-name'>{player.name} - {player.team}</div>
              <Text>{player.yards} Yards</Text>
              <Text>{player.touchdowns} TDs</Text>
            </Flex>
          ))}
        </Box>
      ))}
    </div>
    </div>
  );
};

export default NflStatsPage;
