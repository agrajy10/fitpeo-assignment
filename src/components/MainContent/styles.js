const styles = {
  container: ({ spacing, breakpoints }) => ({
    padding: spacing(3),
    [breakpoints.up("xl")]: {
      padding: spacing(4, 8),
    },
  }),
  topSection: ({ spacing, breakpoints }) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    gap: spacing(2),
    marginBottom: spacing(4),
    [breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }),
  searchBar: ({ breakpoints }) => ({
    width: "100%",
    [breakpoints.up("sm")]: {
      flex: "0 1 250px",
    },
  }),
  menuItem: ({ spacing }) => ({
    fontSize: spacing(1.8),
  }),
  overviewCustomersGrid: ({ spacing, breakpoints }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: spacing(4),
    marginBottom: spacing(4),
    [breakpoints.up("md")]: {
      gridTemplateColumns: "0.6fr 0.4fr",
    },
  }),
};

export default styles;
