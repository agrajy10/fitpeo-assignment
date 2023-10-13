import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { SidebarMenuItem } from "./SidebarMenuItem";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import DashboardIcon from "../../Icons/DashboardIcon";
import ProductIcon from "../../Icons/ProductIcon";
import UsersIcon from "../../Icons/UsersIcon";
import IncomeIcon from "../../Icons/IncomeIcon";
import PromoteIcon from "../../Icons/PromoteIcon";
import HelpIcon from "../../Icons/HelpIcon";

const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    label: "Product",
    icon: <ProductIcon />,
  },
  {
    id: 3,
    label: "Customers",
    icon: <UsersIcon />,
  },
  {
    id: 4,
    label: "Income",
    icon: <IncomeIcon />,
  },
  {
    id: 5,
    label: "Promote",
    icon: <PromoteIcon />,
  },
  {
    id: 6,
    label: "Help",
    icon: <HelpIcon />,
  },
];

const SidebarMenu = () => {
  return (
    <Box component="nav" mt={5}>
      <List>
        {menuItems.map(({ id, label, icon }) => (
          <ListItem key={id} disablePadding>
            <SidebarMenuItem selected={id === 1}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
              {id !== 1 && <KeyboardArrowRightOutlinedIcon />}
            </SidebarMenuItem>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarMenu;
