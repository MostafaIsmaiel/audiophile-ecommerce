import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    backBtn: {
      userSelect: "none",
      textDecoration: "none",
      textTransform: "capitalize",
      fontFamily: theme.typography.fontFamily,
      fontSize: "1rem",
      fontWeight: theme.typography.fontWeightLight,
      marginBottom: "3rem",
      display: "block",
      width: "fit-content",
      color: "#00000080",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  };
});

export default useStyles;
