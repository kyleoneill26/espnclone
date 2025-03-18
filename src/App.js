import React from "react";


import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Pages/Home";
import { themecontext } from "./context/themecontext";
import {  Routes, Route} from "react-router-dom";
import { Navbar } from "./Component/NavbarBox/Navbar";
import Team from "./Component/teampage/team";
import NflPage from "./Pages/NflPage/NflPage";
import MlbPage from "./Pages/MlbPage/MlbPage";
import NbaPage from "./Pages/NbaPage/NbaPage";
import PlayerDetails from "./Pages/search/PlayerDetails";
import Search from "./Pages/search/Search";
import { Commentary } from "./Component/liveScore/commentry";
import { PlayingXI } from "./Component/liveScore/playing";
import { ScoreCard } from "./Component/liveScore/scorecard";
import { PonitTable } from "./Component/liveScore/pointTable";
import { Score } from "./Component/liveScore/score";
import MathInfo from "./Component/home/home";
import Matches from "./Component/match/matches";
import { LiveScoreBox } from "./Component/LiveScorebox/LiveScore";
import NflStandingsPage from "./Pages/NflPage/NflStandingsPage";
import MlbStandingsPage from "./Pages/MlbPage/MlbStandingsPage";
import NbaStandingsPage from "./Pages/NbaPage/NbaStandingsPage";
// import MlbStatsPage from "./Pages/MlbPage/MlbStatsPage";
import NflTeamsPage from "./Pages/NflPage/NflTeamsPage";
import NflStatsPage from "./Pages/NflPage/NflStatsPage";
// import NbaTeamsPage from "./Pages/NbaPage/NbaTeamsPage";
import NflTeams from "./Pages/NflPage/NflTeams";
import NbaTeams from "./Pages/NbaPage/NbaTeams";
import MlbTeamsPage from "./Pages/MlbPage/MlbTeamsPage";
import NbaTeamsPage from "./Pages/NbaPage/NbaTeamsPage";
import NewNewsPage from "./Pages/NewNewsPage/NewNewsPage";




import { News } from "./Component/news/news";

export function App() {
  const { theme, handleTheme, AuthenticationForNav } =
    React.useContext(themecontext);
  // console.log(theme);
  return (
    <ChakraProvider>
      <>
        {AuthenticationForNav ? <LiveScoreBox /> : <></>}
        <Navbar theme={theme} handleTheme={handleTheme} />
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} handleTheme={handleTheme} />}
          ></Route>
           
               
                   {/* Route to handle team pages */}
                 
                   {/* Other routes */}
               
            
            
          <Route path="/matches" element={<Matches />}></Route>
          
          <Route path="/matchinfo" element={<MathInfo />}></Route>
          <Route path="/matches/:id" element={<Team />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:id" element={<PlayerDetails />}></Route>
          <Route path="/Mlb" element={<MlbPage />}></Route>
          <Route path="/Nfl" element={<NflPage />}></Route>
          <Route path="/Nba" element={<NbaPage />}></Route>
          <Route path="/score" element={<Score />}></Route>
          <Route path="/scorecard" element={<ScoreCard />}></Route>
          <Route path="/commentry" element={<Commentary />}></Route>
          <Route path="/playingxi" element={<PlayingXI />}></Route>
          <Route path="/pointtable" element={<PonitTable />}></Route>
          <Route path="/mlbstandings" element={<MlbStandingsPage />} />
          <Route path="/nflstandings" element={<NflStandingsPage />} />
          <Route path="/nbastandings" element={<NbaStandingsPage />} />
          {/* <Route path="/mlbstats" element={<MlbStatsPage />} /> */}
          <Route path="/nflteams" element={<NflTeamsPage />} />
          <Route path="/mlbteams" element={<MlbTeamsPage />} />
          <Route path="/nbateams" element={<NbaTeamsPage />} />
          <Route path="/newspage" element={<NewNewsPage />} />
          <Route path="/nfl/teams/:teamName" element={<NflTeams />} />
          <Route path="/nba/teams/:teamName" element={<NbaTeams />} />
          {/* <Route path="/mlb/teams/:teamName" element={<MlbTeams />} /> */}
          <Route path="/latest-news" element={<News />}></Route>
          <Route path="/nflstats" element={<NflStatsPage />} />
        </Routes>
      </>
    </ChakraProvider>
  );
}

export default App;
