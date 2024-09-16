import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Sidebar from "../components/sidebar";
import { colors } from "../colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",

        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Sidebar />
      {/* Main body */}
      <Box
        sx={{
          flex: 1,
          height: "100%",
          overflow: "auto",
          padding: "20px",
          background: colors?.gray[500],
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Layout;
