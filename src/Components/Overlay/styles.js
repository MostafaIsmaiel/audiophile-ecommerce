import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
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
