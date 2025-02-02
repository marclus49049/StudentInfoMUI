import { Box } from "@mui/material";
import React, { useContext } from "react";
import { NAV_LINKS } from "./constants";
import { useLocation } from "react-router-dom";
import { colors } from "../../colors";
import { NavLink } from "./NavLink";
import { AppContext, AppContextType } from "../../context/AppContext";

const Sidebar = () => {
  // Context
  const { sidebarCollapsed, setSidebarCollapsed } =
    useContext<AppContextType>(AppContext) || {};
  const { pathname } = useLocation();

  const toggleSideBar = () => {
    setSidebarCollapsed?.((value) => !value);
  };
  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        flex: `0 0 ${sidebarCollapsed ? "80px" : "200px"}`,

        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",

        background: colors?.white,

        transition: "all .3s ease",
      }}
    >
      {NAV_LINKS?.map((item) => (
        <NavLink
          key={`${item?.name}-${item?.link}`}
          text={item?.name}
          link={item?.link}
          isActive={item?.link === pathname}
        />
      ))}
    </Box>
  );
};

export default Sidebar;
