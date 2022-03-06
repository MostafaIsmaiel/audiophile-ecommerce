import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    list: {
      position: "fixed",
      bottom: "0",
      right: "0",
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      justifyContent: " flex-end",
    },
    listItem: {
      width: "300px",
      background: "white",
      margin: "10px",
      flex: "0 0 100px",
      position: "relative",
      borderRadius: "10px",
    },
    button: {
      outline: "none",
      "-webkit-appearance": "none",
      cursor: "pointer",
    },

    add: {
      position: "fixed",
      bottom: "10px",
      left: "10px",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      fontSize: "28px",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    close: {
      position: "absolute",
      top: "15px",
      right: "10px",
      background: "white",
      border: "none",
    },
  };
});

export default useStyles;
