import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    footerContainer: {
      background: theme.palette.primary.main,
      marginTop: "7rem",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    footer: {
      padding: "3rem",
      position: "relative",
      "&:before": {
        content: `""`,
        width: "6.5rem",
        height: "0.25rem",
        background: theme.palette.secondary.main,
        position: "absolute",
        top: "0",
      },
      [theme.breakpoints.down("sm")]: {
        "&:before": {
          width: "7rem",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },

      "& p": {
        color: "#ffffff80 !important",
        fontWeight: theme.typography.fontWeightLight,
        fontSize: "0.9rem",
        lineHeight: "1.8",
      },
    },

    imgContainer: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },

    list: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
        gap: 12,
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },

    listItem: {
      width: "unset !important",
      transition: "color 0.2s ease-in-out",
      cursor: "pointer",
      fontSize: "14px",
      letterSpacing: "1.75px",
      textTransform: "uppercase",
      padding: "0 !important",
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
    link: {
      transition: "0.2s",
      "&:hover": {
        color: `${theme.palette.secondary.main} !important`,
      },
    },
    socialContainer: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    social: {
      display: "flex",
      gap: 20,
      width: "fit-content",
      "& a": {
        transition: "color 0.2s ease-in-out",
        color: "white",
        "&:hover": {
          color: theme.palette.secondary.main,
        },
      },
    },
  };
});

export default useStyles;
