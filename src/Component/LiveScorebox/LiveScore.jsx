import React from "react";
import { Box } from "@chakra-ui/react";
import { themecontext } from "../../context/themecontext";

import styles from "./livescore.module.css";
import { Score } from "../Scorebox/Score";
export const LiveScoreBox = () => {
  const { theme } = React.useContext(themecontext);

  return (
    <div
      style={
        theme === "light"
          ? null
          : {
              backgroundColor: "#1d1e1f",
              color: "white",
              border: "1px solid #2b2c2d",
            }
      }
      className={styles.mainb}
    >
      <Box paddingLeft="60px" className={styles.box1} w="100%" p={4}>
        
      </Box>
      <div
        style={
          theme === "light"
            ? null
            : {
                backgroundColor: "#1d1e1f",
                color: "white",
                border: "1px solid #2b2c2d",
              }
        }
        className={styles.box2}
      >
        <Score
          info={{
            team1: "Phillies",
            team2: "Braves",
            team1_score: "5",
            team2_score: "6",
            //   status:"Day2 NZ choose to field",
          
            //   head:"2ND FOUR-DAY GAME,HUBLI",
            image1:
              `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/philadelphia-phillies.svg`,
            image2:
            `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/atlanta-braves.svg`,
          }}
          theme={theme}
        />
        <Score
          info={{
            team1: "Yankees",
            team2: "Mets",
            team1_score: "1",
            team2_score: "5",
         
            // //  con:"Tom Bruce : free spirit who's found his identity ",
            //   head:"2ND FOUR-DAY GAME,HUBLI",
            image1:
            `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/new-york-yankees.svg`,
            image2:
            `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/new-york-mets.svg`,
          }}
          theme={theme}
        />
        <Score
          info={{
            team1: "Astros",
            team2: "Dodgers",
            team1_score: "5",
            team2_score: "6",
            
            //   con:"Tom Bruce : free spirit who's found his identity ",

            image1:
            `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/houston-astros.svg`,
            image2:
            `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/los-angeles-dodgers.svg`,
          }}
          theme={theme}
        />
        <Score
          info={{
            team1: "Cubs",
            team2: "Redsox",
            team1_score: "5",
            team2_score: "6",
            con: "",
            //   con:"Tom Bruce : free spirit who's found his identity ",
            //   head:"2ND FOUR-DAY GAME,HUBLI",
            image1:
            `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/chicago-cubs.svg`,
            image2:
            `https://raw.githubusercontent.com/marc-wilson/mlb-logos/4668e5e59dd8afcde8819211d03604e631a0ed98/logos/2018/boston-red-sox.svg`,
          }}
          theme={theme}
        />
      </div>
    </div>
  );
};
