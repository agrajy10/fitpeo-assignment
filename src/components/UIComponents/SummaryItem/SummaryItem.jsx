import { Box, Paper, Typography } from "@mui/material";
import styles from "./styles";

const SummaryItem = ({ label, amount, percentage, icon, iconStyling = {} }) => {
  return (
    <Paper sx={styles.container} elevation={0}>
      <Box sx={[styles.icon, iconStyling]}>{icon}</Box>
      <Box>
        <Typography sx={styles.lbl}>{label}</Typography>
        <Typography sx={styles.amount}>{amount}</Typography>
        <Typography sx={styles.percentage}>{percentage}</Typography>
      </Box>
    </Paper>
  );
};

export default SummaryItem;
