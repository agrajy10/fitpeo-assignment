import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const SearchBar = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: "1px solid #fff",
  borderRadius: theme.spacing(0.5),
  "& .MuiInputBase-root": {
    paddingLeft: theme.spacing(1),
  },
  "& .MuiInputBase-input": {
    borderRadius: theme.spacing(0.5),
    fontWeight: 500,
    paddingTop: theme.spacing(1.375),
    paddingBottom: theme.spacing(1.375),
    paddingLeft: theme.spacing(0.5),
    fontSize: theme.spacing(1.5),
  },
  "& .MuiSvgIcon-root": {
    color: "#8c8c8c",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    display: "none",
  },
}));

export default SearchBar;
