import { Box, IconButton } from "@mui/material";
import Logo from "../Logo/Logo";
import styles from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

const TopBar = ({ onMenuBtnClick }) => {
  return (
    <Box component="header" sx={styles.container}>
      <Box fontSize={25}>
        <Logo />
      </Box>
      <IconButton onClick={onMenuBtnClick} sx={styles.menuBtn}>
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default TopBar;
