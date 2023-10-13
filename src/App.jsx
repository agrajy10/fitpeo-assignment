import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { Box, Hidden, Drawer } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import TopBar from "./components/TopBar/TopBar";
import { useState } from "react";

const styles = {
  container: ({ spacing, breakpoints }) => ({
    [breakpoints.up("lg")]: {
      paddingLeft: spacing(40),
    },
  }),
};

function App() {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={styles.container}>
        <Hidden lgUp>
          <TopBar onMenuBtnClick={() => setIsMenuDrawerOpen(true)} />
        </Hidden>
        <Hidden lgDown>
          <Sidebar />
        </Hidden>
        <MainContent />
      </Box>
      <Drawer
        open={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
      >
        <Sidebar />
      </Drawer>
    </>
  );
}

export default App;
