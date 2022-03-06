import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    producerContainer: {
      marginTop: "7.5rem",

      "& img": {
        maxWidth: "100%",
        borderRadius: "10px",
      },
    },
    paragraph: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column !important",
      gap: "2.5rem",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
      "& h2": {
        letterSpacing: "3px",
        fontSize: "2.5rem",
        fontWeight: "bold",
        "& span": {
          color: theme.palette.secondary.main,
        },
      },
      "& p": {
        color: "#00000080 !important",
        lineHeight: "1.66",
      },
    },
  };
});

export default useStyles;
