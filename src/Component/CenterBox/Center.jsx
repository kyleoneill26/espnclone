import styles from "./center.module.css";
import React from "react";
import {  useSelector } from "react-redux";
import {

} from "../../Redux/centrebox/action";
import { NavBox } from "../newsbox.jsx/newdiv";

import { FaAngleRight } from "react-icons/fa";
import { Footer } from "../HomeFooter/Footer";


import { Newsmid } from "../newsmidbox/newsmid";
import { Score } from "../Scorebox/Score";
export const CenterBox = ({ theme }) => {

  const newsdisplay = useSelector((state) => state.news);




  

  //console.log(newsdisplay,newserror,newsloading)
  return (
    <div
      style={
        theme === "light" ? null : { backgroundColor: "black", color: "black" }
      }
      className={styles.centerbox1}
    >                                             
      <div>
        
      </div>
                                                  {/*============ Main Div ==============*/} 
      <div
        className={styles.container}
        style={
          theme === "light"
            ? null
            : { backgroundColor: "black", color: "black" }
        }
      >

        <div className={styles.leftbox}>          {/*============ Left Div ==============*/}
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
            className={styles.firstbox}
          >
            <h1 style={{ fontWeight: "500" }}>Upcoming Games</h1>
            <hr
              style={
                theme === "light"
                  ? { width: "100%" }
                  : {
                    backgroundColor: "#2b2c2d",
                    color: "#2b2c2d",
                    width: "100%",
                  }
              }
            />
          <h1 style={{ fontWeight: "500" }}>Knicks vs Pacers</h1>
          <h1 style={{ fontWeight: "500" }}>Cubs vs Pirates</h1>
          <h1 style={{ fontWeight: "500" }}>Rangers vs Panthers</h1>
            
          </div>
          <div
            className={styles.keyseries}
            style={
              theme === "light"
                ? null
                : {
                  backgroundColor: "#1d1e1f",
                  color: "white",
                  border: "1px solid #2b2c2d",
                }
            }
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>Key Series</h1>
            <hr
              style={
                theme === "light"
                  ? { width: "100%" }
                  : {
                    backgroundColor: "#2b2c2d",
                    color: "#2b2c2d",
                    width: "100%",
                  }
              }
            />
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>NBA Playoffs</h1>
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>NHL Playoffs</h1>
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>World Series</h1>
            
          
          </div>

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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              Players to Watch
            </h1>
            <hr style={{ width: "100%" }} />
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>Paul Skenes - PIT</h1>
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>Tyrese Maxey - PHI</h1>
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>Connor Bedard - CHI</h1>

            
          </div>
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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              Follow Me
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>
              <FaAngleRight color="#03a9f4" />
              Instagram
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Twitter
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Facebook
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Youtube
            </h1>
          </div>
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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              Placer holder
            </h1>
            <hr style={{ width: "100%" }} />

           
          </div>
        </div>
                                                   {/*============ Mid Div ==============*/}
        <div
          className={styles.midbox}
          style={
            theme === "light"
              ? null
              : {
                backgroundColor: "#1d1e1f",
                color: "white",
                border: "1px solid #2b2c2d",
              }
          }
        >                                              
          

          

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
            className={styles.newsfeed}

          >

            
            <div className={styles.midbox} style={theme === "light" ? null : {backgroundColor: "#1d1e1f", color: "white", border: "1px solid #2b2c2d"}}>
    <div className={styles.carouselContainer}>
        <div className={styles.carouselSlide}>
            <img src="https://images.squarespace-cdn.com/content/v1/59619e059de4bb7b8d0c4f02/1547249301674-AY3G86KNT4WQHP0AJG6L/NFL-Banner.png" alt="Description"/>
            <p>NFL</p>
        </div>
        <div className={styles.carouselSlide}>
            <img src="https://cdn.imgbin.com/1/19/9/imgbin-nba-logo-national-basketball-league-brand-nba-playoffs-aDxPqvmXxQzf59sAftuzRLnf6.jpg" alt="Description"/>
            <p>NBA</p>
        </div>
        <div className={styles.carouselSlide}>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/db9ed8c9-b18e-40d7-9b96-eb34d64138e6/dfz7pdw-08f67cd8-97e4-469e-a079-ae1c94f6f593.png" alt="Description"/>
            <p>NBA</p>
        </div>
        <div className={styles.carouselSlide}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKnZSO7pzgDVHFWTGLXdC9P0xwgH6zUYXhA&s" alt="Description"/>
            <p>NBA</p>
        </div>
        
       
    </div>
</div>
            <p>
            Place Holder
            </p>
          </div>
          <hr />
           
           {/*======= Current Math Scores =======*/}
          <Score
            info={{
              team1: "Phillies",
              team2: "Braves",
              score: "(5 2",
              status: "Final",
              con: "Bryce Harper hits a grandslam to walk it off ",
              head: "Game 5",
              image1:
                "https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg",
              image2:
                "https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
            }}
            theme={theme}
          />

          <div
            className={styles.threebox}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gridRow: "1",
            }}
          >
            {newsdisplay.map((article) =>
              article.title === undefined ? (
                console.log("News 1st",article)
              ) : (
                null
              )
            )}

            <div
              style={{
                border: "1px solid  #ebebeb",
                
                width: "630px",
                margin : "auto",
                
                padding: "0px",
                backgroundColor : "red",
              }}
            >
              <Newsmid theme={theme} />
            </div>
          </div> 

          {newsdisplay.map((articles) =>
            articles.title === undefined ? (
              console.log("News 2nd",articles)
            ) : (
              <NavBox key={articles.title} theme={theme} info={articles.description} />
            )
          )}
          
        </div>
                                                  {/*============ Right Div ==============*/}
        <div className={styles.third}>            
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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              News Headlines
            </h1>
            <hr style={{ width: "100%" }} />

            
          </div>
         
        </div>
      </div>
                                                  {/*============ Footer Div ==============*/}
      <Footer theme={theme} />
    </div>
  );
};
