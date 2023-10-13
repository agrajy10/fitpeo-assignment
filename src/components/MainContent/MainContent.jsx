import { Box, Typography } from "@mui/material";
import styles from "./styles";
import wavingHand from "../../../public/waving-hand.svg";
import SearchBar from "../UIComponents/SearchBar/SearchBar";
import Summary from "../Summary/Summary";
import ProductSell from "../ProductSell/ProductSell";
import Overview from "../Overview";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Customers from "../Customers/Customers";

const MainContent = () => {
  return (
    <Box component="main" sx={styles.container}>
      <Box sx={styles.topSection}>
        <Typography
          lineHeight={1}
          fontSize={22}
          fontWeight={600}
          whiteSpace="nowrap"
        >
          Hello Shahrukh <img src={wavingHand} alt="" width={24} height={24} />,
        </Typography>
        <Box sx={styles.searchBar}>
          <SearchBar
            fullWidth
            placeholder="Search"
            InputProps={{
              startAdornment: <SearchRoundedIcon />,
            }}
          />
        </Box>
      </Box>
      <Summary />
      <Box sx={styles.overviewCustomersGrid}>
        <Overview />
        <Customers />
      </Box>
      <ProductSell />
    </Box>
  );
};

export default MainContent;
