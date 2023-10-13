import { Box, Paper } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./styles";
import { Heading, SubHeading } from "../UIComponents/Headings";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "Customers",
      data: [12, 19, 3],
      backgroundColor: ["#f2efff", "#633aea", "#f047a2"],
    },
  ],
};

const Customers = () => {
  return (
    <Paper component="section" sx={{ p: 2, borderRadius: 2 }} elevation={0}>
      <Heading>Customers</Heading>
      <SubHeading>Customers that buy products</SubHeading>
      <Box sx={styles.graphContainer}>
        <Doughnut data={data} />
      </Box>
    </Paper>
  );
};

export default Customers;
