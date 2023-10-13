const styles = {
  graphContainer: ({ spacing, breakpoints }) => ({
    borderRadius: "50%",
    backgroundColor: "#FFF",
    width: spacing(25.25),
    height: spacing(25.25),
    margin: spacing(4, "auto", 2, "auto"),
    boxShadow: "0px 0px 50px rgba(0,0,0,0.07)",
    padding: spacing(2.5, 3, 3, 3),
    [breakpoints.up("md")]: {
      width: spacing(31.25),
      height: spacing(31.25),
    },
  }),
};

export default styles;
