import React, { useState } from "react";
import { DropdownBtn } from "./UIComponents/DropdownBtn";
import { Box, Menu, MenuItem, Paper } from "@mui/material";
import styles from "./MainContent/styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Heading, SubHeading } from "./UIComponents/Headings";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  elements: {
    bar: {
      borderRadius: 8,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Earnings",
      data: [100, 200, 300, 100, 400, 600, 500, 800, 500, 100, 700, 950],
      backgroundColor: "#f2efff",
      hoverBackgroundColor: "#5a32ea",
    },
  ],
};

const Overview = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const dropdownBtnIcon = isMenuOpen ? (
    <KeyboardArrowUpOutlinedIcon sx={styles.icon} />
  ) : (
    <KeyboardArrowDownOutlinedIcon sx={styles.icon} />
  );

  return (
    <Paper component="section" sx={{ p: 2, borderRadius: 2 }} elevation={0}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Heading>Overview</Heading>
          <SubHeading>Monthly Earning</SubHeading>
        </Box>
        <DropdownBtn onClick={handleClick} endIcon={dropdownBtnIcon}>
          Quarterly
        </DropdownBtn>
        <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleClose}>
          <MenuItem sx={styles.menuItem} onClick={handleClose}>
            Monthly
          </MenuItem>
          <MenuItem sx={styles.menuItem} onClick={handleClose}>
            Quarterly
          </MenuItem>
          <MenuItem sx={styles.menuItem} onClick={handleClose}>
            Yearly
          </MenuItem>
        </Menu>
      </Box>

      <Bar options={options} data={data} />
    </Paper>
  );
};

export default Overview;
