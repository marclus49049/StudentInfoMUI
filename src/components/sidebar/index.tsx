import { Box } from "@mui/material";
import React from "react";
import { NAV_LINKS } from "./constants";
import { useLocation } from "react-router-dom";
import { colors } from "../../colors";
import { NavLink } from "./NavLink";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        flex: "0 0 180px",

        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",

        background: colors?.white,
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
