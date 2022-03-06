import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: {
      justifyContent: "space-between",
      gap: 20,
      borderBottom: "1px solid #40404080",
    },
    listContainer: {
      width: "calc(100vw - 8rem)",
      padding: "3rem 1rem 1rem",
    },
    list: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      justifyContent: "center",
    },

    listItem: {
      transition: "color 0.2s ease-in-out",
      cursor: "pointer",
      fontSize: "14px",
      letterSpacing: "1.75px",
      textTransform: "uppercase",
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
    },
    link: {
      transition: "0.2s",
      "&:hover": {
        color: `${theme.palette.secondary.main} !important`,
      },
    },
    active: {
      color: `${theme.palette.secondary.main} !important`,
    },
    cartModal: {
      position: "absolute",
      top: "100%",
      right: "0",
      background: "white",
      padding: "2rem",
      zIndex: "5",
      borderRadius: "10px",
      [theme.breakpoints.down("sm")]: {
        right: "50%",
        transform: "translateX(50%) !important",
        width: "80%",
      },
    },
    removeAll: {
      "&:hover": {
        background: "none !important",
      },
    },
    cartListItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem",
      padding: "0.5rem 0 !important",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    productCartInfo: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "unset !important",
      },
      "& img": {
        width: "unset !important",
        borderRadius: "10px",
        [theme.breakpoints.up("md")]: {
          maxWidth: "40%",
        },
        [theme.breakpoints.down("md")]: {
          maxWidth: "50%",
        },
        [theme.breakpoints.down("sm")]: {
          maxWidth: "30%",
        },
      },
    },
    productCartCounter: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      "& p, & button": {
        background: "#F1F1F1",
        padding: "0.25rem   !important",
        borderRadius: "0 !important",
        minWidth: "2rem !important",
      },
      "& p": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        fontSize: "0.8rem",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "& button": {
        color: "#00000080 ",
        "&:hover": {
          color: theme.palette.secondary.main,
        },
      },
    },
    overlay: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100vh",
      background: "#0000007a",
      zIndex: "3",
    },
  };
});

export default useStyles;
