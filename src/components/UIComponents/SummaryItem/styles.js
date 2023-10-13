const styles = {
  container: ({ spacing, breakpoints }) => ({
    borderRadius: spacing(1),
    padding: spacing(2, 1.5),
    display: "grid",
    gridTemplateColumns: "64px 1fr",
    gap: spacing(1),
    alignItems: "center",
    [breakpoints.up("lg")]: {
      gridTemplateColumns: "104px 1fr",
    },
  }),
  icon: ({ spacing, breakpoints }) => ({
    backgroundColor: "#ebfff4",
    color: "#00a948",
    width: spacing(8),
    height: spacing(8),
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    "& .MuiSvgIcon-root": {
      fontSize: spacing(4),
    },
    [breakpoints.up("lg")]: {
      width: spacing(13),
      height: spacing(13),
      "& .MuiSvgIcon-root": {
        fontSize: `${spacing(6)} !important`,
      },
    },
  }),
  lbl: ({ spacing }) => ({
    color: "#8e8b8b",
    fontSize: spacing(1.5),
    lineHeight: 1,
    marginBottom: spacing(0.5),
  }),
  amount: ({ spacing }) => ({
    color: "#202020",
    fontSize: spacing(3),
    fontWeight: 600,
    lineHeight: 1,
  }),
  percentage: ({ spacing }) => ({
    color: "#414449",
    fontSize: spacing(1.5),
  }),
};

export default styles;
