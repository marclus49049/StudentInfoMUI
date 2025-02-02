import { Box } from "@mui/material";
import { useContext } from "react";
import { NAV_LINKS } from "./constants";
import { useLocation } from "react-router-dom";
import { colors } from "../../colors";
import { NavLink } from "./NavLink";
import { AppContext, AppContextType } from "../../context/AppContext";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon";

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
        flex: `0 0 ${sidebarCollapsed ? "56px" : "250px"}`,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: sidebarCollapsed ? "20px 10px" : "20px",
        background: colors?.white,
        transition: "all .3s ease",
        position: "relative",
        zIndex: 1000,
        overflow: "visible",
      }}
    >
      {/* Toggle Button */}
      <Box
        height={"24px"}
        width={"24px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"absolute"}
        border={`1px solid #EAECF0`}
        borderRadius={"20px"}
        boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
        right={"-3px"}
        sx={{
          background: "#fff",
          transform: "translate(50%, -50%)",
          cursor: "pointer",
        }}
        onClick={toggleSideBar}
      >
        {sidebarCollapsed ? (
          <ChevronRightIcon size={"16px"} />
        ) : (
          <ChevronLeftIcon size={"16px"} />
        )}
      </Box>
      {/* Nav Links */}
      {NAV_LINKS?.filter((menu) => menu.visible).map((menu) => (
        <NavLink
          key={`${menu?.name}-${menu?.link}`}
          text={menu?.name}
          link={menu?.link}
          isActive={menu?.link === pathname}
        />
      ))}
    </Box>
  );
};

export default Sidebar;
