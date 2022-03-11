import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    erropage: {
      height: "100vh",
      display: "flex !important",
      justifyContent: "center",
      alignItems: "center",
    },
    link: {
      color: theme.palette.secondary.main,
    },
  };
});

export default useStyles;
