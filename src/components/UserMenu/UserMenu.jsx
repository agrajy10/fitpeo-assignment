import { useState } from "react";
import { Avatar, ButtonBase, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import avatarImage from "../../../public/avatar.svg";
import styles from "./styles";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <ButtonBase onClick={handleClick} sx={styles.container}>
        <Avatar
          component="span"
          sx={styles.avatar}
          alt="Evano"
          src={avatarImage}
        />
        <Typography sx={styles.name} component="span">
          Evano
        </Typography>
        <Typography sx={styles.designation} component="span">
          Project Manager
        </Typography>
        {isMenuOpen && <KeyboardArrowUpOutlinedIcon sx={styles.icon} />}
        {!isMenuOpen && <KeyboardArrowDownOutlinedIcon sx={styles.icon} />}
      </ButtonBase>
      <Menu
        sx={styles.menu}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
      >
        <MenuItem sx={styles.menuItem} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem sx={styles.menuItem} onClick={handleClose}>
          My account
        </MenuItem>
        <MenuItem sx={styles.menuItem} onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
