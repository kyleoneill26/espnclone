import React from "react";
import styles from "./newsmid.module.css"
export const Newsmid=(props)=>{
    let theme=props.theme
    return <>
    <hr/>
    <div  style={theme==="light"?null:{backgroundColor:"#1d1e1f",color:"white",border:"1px solid #2b2c2d"}} className={styles.box1}>
        
    <h1>Titans QB Will Levis sees Tennessee's offseason moves as a sign the club plans to win now</h1>
    <h1>49ers QB Brock Purdy ranks 2nd in the latest quarterback rankings</h1>
    <h1>Chargers sign Derwin James to a mega extension, making him the highest-paid safety in league history</h1>
    <h1>Yankees set to dominate the AL East with new powerhouse lineup</h1>
    <h1>Lakers gear up for a strong playoff run with LeBron James at the helm</h1>
    <h1>Maple Leafs clinch playoff spot with a thrilling overtime win against Bruins</h1>
    <h1>Alabama Crimson Tide tops preseason polls once again as favorites to win the championship</h1>
    <h1></h1>
    </div>

</>}