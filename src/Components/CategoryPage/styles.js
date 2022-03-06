import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    category: {
      padding: "8rem 0",
    },
    categoryContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      marginBottom: "2rem",
    },
    productImage: {
      "& img": {
        maxWidth: "100%",
      },
    },
    description: {
      color: "#00000080 !important",
    },
    seeProductBtn: {
      padding: "0.7rem 3rem !important",
      marginTop: "1rem !important",
      "&:hover": {
        backgroundColor: "rgb(227 139 89) !important",
      },
    },
  };
});

export default useStyles;
