import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      position: "fixed !important",
      top: "15px",
      left: "10px",
      zIndex: "10",
    },
    listItem: {
      borderRadius: "5px",
      backgroundColor: "#38a169",
    },
    button: {
      minWidth: "unset !important",
      padding: "0 !important",
      marginLeft: "15px !important",
    },
  };
});

export default useStyles;
