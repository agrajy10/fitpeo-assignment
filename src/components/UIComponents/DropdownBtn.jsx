import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const DropdownBtn = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "#f5f5f5",
  color: "#777978",
  borderRadius: theme.spacing(0.5),
  fontSize: theme.spacing(1.7),
  padding: theme.spacing(1, 1.5, 1, 2),
  textTransform: "none",
}));
