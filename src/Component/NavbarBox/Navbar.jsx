import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import styles from "./Nav.module.css";
import { themecontext } from "../../context/themecontext";

export const Navbar = ({ theme, handleTheme }) => {
  const { handleChangeAuth } = React.useContext(themecontext);

  return (
    <div className={styles.nvi}>
      <Box className={styles.Navbox} bg={theme === "light" ? "#03a9f4" : "#1d1e1f"} w="100%" height="65px" p={4}>
        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2916366/settings_images/4In1hblfQdejTj6FeVK0_ESPN_web.png" alt="logo"/>
        <div style={{ display: "flex", gap: "50px", marginLeft: "10px",}}>
          <Link to="" position="relative"> Home </Link>
          <Link to="/Mlb" position="relative" > MLB </Link>
          <Link to="/Nfl" position="relative" > NFL </Link>
          <Link to="Nba" position="relative" >{" "} NBA </Link>
          <Link to="/latest-news" position="relative"> {""} NHL </Link>
          <Link to="newspage" position="relative" > News </Link>
        </div>
        <div
          style={{ display: "flex", gap: "30px", marginLeft: "500px",}}>
          <Link to="/signup" style={{ display: "flex", gap: "10px", marginLeft: "100px"}} onClick={() => handleChangeAuth(false)} > Fantasy </Link>
          <Link to="" position="relative" > {" "} Edition </Link>
          {theme === "light" ? (
            <IoMdMoon onClick={() => handleTheme()} size="24px" />
          ) : (
            <FiSun onClick={() => handleTheme()} size="24px" />
          )}
          <BsTranslate size="24px" />
          <FaTh size="24px" />
          <Link to="/search">
            <FaSearch size="20px" />
          </Link>
        </div>
      </Box>
    </div>
  );
};
