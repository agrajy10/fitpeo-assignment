import { ListItemButton } from "@mui/material";
import styled from "@emotion/styled";

export const SidebarMenuItem = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 1.5),
  marginBottom: theme.spacing(1),
  "& .MuiTypography-root": {
    fontSize: theme.spacing(1.9),
    fontWeight: 500,
    color: "#7e82a2",
  },
  "& .MuiListItemIcon-root": {
    minWidth: theme.spacing(4),
  },
  "& .MuiSvgIcon-root": {
    color: "#7e82a2",
  },
  "&.Mui-selected": {
    background: "#2d2d69",
    "& .MuiTypography-root": {
      color: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
}));
