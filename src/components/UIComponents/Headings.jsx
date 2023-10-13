import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  fontWeight: 600,
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.7),
  color: "#bdbdbd",
}));

export { Heading, SubHeading };
