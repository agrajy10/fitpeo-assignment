const styles = {
  container: ({ spacing, breakpoints }) => ({
    position: "relative",
    top: 0,
    left: 0,
    height: "100%",
    width: spacing(40),
    backgroundColor: "#040440",
    color: "#FFF",
    padding: spacing(4, 2),
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("lg")]: {
      position: "fixed",
    },
  }),
};

export default styles;
