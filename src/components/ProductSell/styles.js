const styles = {
  topSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 2,
  },
  topRow: ({ spacing, breakpoints }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: spacing(1),
    [breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  }),
  heading: {
    marginRight: "auto",
    gridColumn: "1/-1",
  },
  product: ({ spacing }) => ({
    display: "grid",
    gridTemplateColumns: "125px 1fr",
    gap: spacing(2),
    alignItems: "center",
  }),
  productImage: ({ spacing }) => ({
    borderRadius: spacing(1),
    overflow: "hidden",
    width: 125,
    height: 60,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  }),
  productTitle: ({ spacing, breakpoints }) => ({
    fontSize: spacing(2),
    fontWeight: 600,
    [breakpoints.up("md")]: {
      fontSize: spacing(2.3),
    },
  }),
  menuItem: ({ spacing }) => ({
    fontSize: spacing(1.8),
  }),
};

export default styles;
