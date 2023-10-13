const styles = {
  container: ({ spacing }) => ({
    borderRadius: spacing(0.5),
    padding: spacing(1.5, 4.75, 1.5, 8.5),
    backgroundColor: "#2d2d69",
    lineHeight: 1,
    display: "block",
    width: "100%",
    textAlign: "left",
  }),
  avatar: ({ spacing }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: spacing(1.5),
  }),
  name: ({ spacing, palette }) => ({
    display: "block",
    color: palette.common.white,
    fontWeight: 500,
    fontSize: spacing(1.9),
  }),
  designation: ({ spacing, palette }) => ({
    display: "block",
    color: "#9d9cb9",
    fontSize: spacing(1.5),
  }),
  icon: ({ spacing }) => ({
    position: "absolute",
    right: spacing(1.5),
    top: "50%",
    transform: "translateY(-50%)",
  }),
  menu: ({ spacing }) => ({
    "& .MuiPaper-root ": {
      minWidth: spacing(35.75),
    },
  }),
  menuItem: ({ spacing }) => ({
    fontSize: spacing(1.8),
  }),
};

export default styles;
