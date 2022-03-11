import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    checkout: {
      padding: "8rem 0",
      [theme.breakpoints.down("md")]: {
        padding: "4rem 0",
      },
    },
    formGrid: {
      padding: "2rem 3rem 3rem",
      background: "white",
      borderRadius: "10px",
      height: "100%",
    },
    fieldset: {
      border: "none",
      fontFamily: theme.typography.fontFamily,
      marginTop: "3rem",
    },
    legend: {
      fontSize: "14px",
      textTransform: "uppercase",
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: "1.2px",
      marginBottom: "1rem",
    },
    labelContainer: {
      marginBottom: "0.7rem !important",
    },
    label: {
      fontSize: "12px !important",
      fontWeight: `${theme.typography.fontWeightBold} !important`,
      color: `${theme.palette.primary.main} !important`,
    },
    errorMessage: {
      fontSize: "0.85rem !important",
      color: "#cd2c2c",
      fontWeight: `${theme.typography.fontWeightLight} !important`,
    },
    formLabel: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      border: `1px solid #cfcfcf`,
      borderRadius: "5px",
      padding: "0.5rem 0.2rem !important",
      cursor: "pointer",
      fontWeight: `${theme.typography.fontWeightBold} !important`,
    },
    active: {
      borderColor: theme.palette.secondary.main,
    },
    cartListItem: {
      display: "flex",
      justifyContent: "space-between !important",
      gap: "1rem",
      padding: "0.5rem 10px 0.5rem 0 !important",
    },
    productCartInfo: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      [theme.breakpoints.down("sm")]: {
        gap: "1rem",
      },
      "& img": {
        width: "30% !important",
        borderRadius: "10px",
      },
    },
    summaryList: {
      maxHeight: "10rem",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "2px",
      },
    },
    priceContainer: {
      marginTop: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    compeletePurchasing: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      zIndex: "20",
      background: "white",
      borderRadius: "10px",
      [theme.breakpoints.down("md")]: {
        width: "85%",
      },
    },

    checkmark: {
      [theme.breakpoints.down("sm")]: {
        width: "50px",
      },
    },
  };
});

export default useStyles;
