import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    categories: {
      margin: "7rem 0",
      [theme.breakpoints.down("md")]: {
        margin: "8rem 0",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "6rem 0",
      },
    },
    categoriesContainer: {
      padding: "2rem 1rem",
    },
    link: {
      textDecoration: "none",
      width: "100%",
    },
    categoriesList: {
      display: "flex",
      justifyContent: "space-evenly",
      gap: 10,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: 70,
      },
    },

    listItem: {
      width: "100%",
    },

    paper: {
      position: "relative",
      padding: "5.5rem 0 1.3rem",
      textAlign: "center",
      backgroundColor: "#F1F1F1 !important",
      borderRadius: "6px !important",
      "&:hover button": {
        color: `${theme.palette.secondary.main} !important`,
      },
    },
    categoryImg: {
      width: "9rem",
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    typo: {
      letterSpacing: 2,
      fontWeight: `${theme.typography.fontWeightBold} !important`,
      textTransform: "uppercase",
    },
    btn: {
      color: "#00000080 !important",
    },
  };
});

export default useStyles;
