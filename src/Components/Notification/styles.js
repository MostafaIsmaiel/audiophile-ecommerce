import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      position: "fixed !important",
      top: "80px",
      left: "10px",
      zIndex: "10",
      // transition: "all 0.3s",
      [theme.breakpoints.down("sm")]: {
        top: "50px",
        width: "80%",
        left: "50%",
        transform: "translateX(-50%)",
        alignItems: "center",
      },
    },
    listItem: {
      borderRadius: "5px",
      backgroundColor: "#38a169",
      width: "fit-content !important",
      paddingInline: "15px",
    },
    button: {
      minWidth: "unset !important",
      padding: "0 !important",
      marginLeft: "15px !important",
    },
  };
});

export default useStyles;
