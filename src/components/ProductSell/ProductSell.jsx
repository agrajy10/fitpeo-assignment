import React, { useState } from "react";
import { DropdownBtn } from "../UIComponents/DropdownBtn";
import {
  Box,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import SearchBar from "../UIComponents/SearchBar/SearchBar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import flower from "../../../public/flower.jpg";
import { Heading } from "../UIComponents/Headings";

const ProductSell = () => {
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
      <Box sx={styles.topRow}>
        <Heading sx={styles.heading}>Product Sell</Heading>
        <SearchBar
          sx={{ "&.MuiFormControl-root": { bgcolor: "#f5f5f5" } }}
          placeholder="Search"
          InputProps={{
            startAdornment: <SearchRoundedIcon />,
          }}
        />
        <DropdownBtn onClick={handleClick} endIcon={dropdownBtnIcon}>
          Last 30 days
        </DropdownBtn>
        <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleClose}>
          <MenuItem sx={styles.menuItem} onClick={handleClose}>
            Last 30 days
          </MenuItem>
          <MenuItem sx={styles.menuItem} onClick={handleClose}>
            Last 45 days
          </MenuItem>
          <MenuItem sx={styles.menuItem} onClick={handleClose}>
            Last 60 days
          </MenuItem>
        </Menu>
      </Box>

      <TableContainer sx={{ mt: 3, whiteSpace: "nowrap" }}>
        <Table>
          <TableHead sx={{ "& th": { color: "#bdbdbd" } }}>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>Product Name</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center" sx={{ pr: 0 }}>
                Total Sales
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ "& td": { fontSize: 15 } }}>
            {Array.from({ length: 10 }).map((index) => (
              <TableRow key={index}>
                <TableCell sx={{ pl: 0 }}>
                  <Box sx={styles.product}>
                    <Box sx={styles.productImage}>
                      <img src={flower} alt="" />
                    </Box>
                    <Box>
                      <Typography sx={styles.productTitle}>
                        Abstract 3D
                      </Typography>
                      <Typography color="#bdbdbd" fontSize={13}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, aperiam.
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">32 in stock</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  $45.99
                </TableCell>
                <TableCell sx={{ pr: 0 }} align="center">
                  20
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ProductSell;
