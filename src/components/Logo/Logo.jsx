import { Typography } from "@mui/material";
import styles from "./styles";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";

const Logo = () => {
  return (
    <Typography fontSize="0.8em" sx={styles.logo}>
      <HexagonOutlinedIcon sx={{ fontSize: "1.8em" }} /> Dashboard
    </Typography>
  );
};

export default Logo;
