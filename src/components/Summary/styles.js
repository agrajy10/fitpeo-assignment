const styles = {
  container: ({ spacing, breakpoints }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: spacing(2),
    marginBottom: spacing(5),
    [breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [breakpoints.up("xl")]: {
      gap: spacing(3),
    },
  }),
  upArrowTxt: {
    color: "#00a948",
    fontWeight: 600,
  },
  downArrowTxt: {
    color: "#cd0344",
    fontWeight: 600,
  },
  icon: {
    fontSize: 14,
    position: "relative",
    top: 2,
  },
  ordersIcon: {
    backgroundColor: "#e7dbff",
    color: "#a814ff",
  },
  balanceIcon: {
    backgroundColor: "#cdf3ff",
    color: "#0253bd",
  },
  salesIcon: {
    backgroundColor: "#ffc7e8",
    color: "#d60009",
  },
};

export default styles;
