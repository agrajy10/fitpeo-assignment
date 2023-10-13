import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";
import Logo from "../Logo/Logo";
import UserMenu from "../UserMenu/UserMenu";
import SidebarMenu from "../UIComponents/SidebarMenu/SidebarMenu";

const Sidebar = () => {
  return (
    <Box component="header" sx={styles.container}>
      <Box fontSize={30}>
        <Logo />
      </Box>
      <SidebarMenu />
      <Box mt="auto">
        <UserMenu />
      </Box>
    </Box>
  );
};

export default Sidebar;
