import { Box } from "@mui/material";
import styles from "./styles";
import SummaryItem from "../UIComponents/SummaryItem/SummaryItem";
import EarningIcon from "../Icons/EarningIcon";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SalesIcon from "../Icons/SalesIcon";
import BalanceIcon from "../Icons/BalanceIcon";
import OrdersIcon from "../Icons/OrdersIcon";

const Summary = () => {
  return (
    <Box component="section" sx={styles.container}>
      <SummaryItem
        label="Earning"
        amount="$198k"
        percentage={
          <>
            <Box sx={styles.upArrowTxt} component="span">
              <ArrowUpwardIcon sx={styles.icon} /> 37.8%{" "}
            </Box>
            this month
          </>
        }
        icon={<EarningIcon />}
      />
      <SummaryItem
        label="Orders"
        amount="$2.4k"
        percentage={
          <>
            <Box sx={styles.downArrowTxt} component="span">
              <ArrowDownwardIcon sx={styles.icon} /> 2%{" "}
            </Box>
            this month
          </>
        }
        iconStyling={styles.ordersIcon}
        icon={<OrdersIcon />}
      />
      <SummaryItem
        label="Balance"
        amount="$2.4k"
        percentage={
          <>
            <Box sx={styles.downArrowTxt} component="span">
              <ArrowDownwardIcon sx={styles.icon} /> 2%{" "}
            </Box>
            this month
          </>
        }
        iconStyling={styles.balanceIcon}
        icon={<BalanceIcon />}
      />
      <SummaryItem
        label="Total Sales"
        amount="$89k"
        percentage={
          <>
            <Box sx={styles.upArrowTxt} component="span">
              <ArrowUpwardIcon sx={styles.icon} /> 11%{" "}
            </Box>
            this week
          </>
        }
        iconStyling={styles.salesIcon}
        icon={<SalesIcon />}
      />
    </Box>
  );
};

export default Summary;
