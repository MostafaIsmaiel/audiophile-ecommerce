import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    product: {
      padding: "8rem 0",
      [theme.breakpoints.down("md")]: {
        padding: "4rem 0",
      },
    },
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

    productContainer: {
      flexWrap: "unset !important",
    },
    productImage: {
      "& img": {
        maxWidth: "100%",
        borderRadius: "10px",
      },
    },
    description: {
      color: "#00000080 !important",
    },
    addToCart: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    productCartCounter: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      "& p, & button": {
        background: "#F1F1F1",
        padding: "0.8rem   !important",
        borderRadius: "0 !important",
        minWidth: "3rem !important",
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
    addToCartBtn: {
      padding: "0.7rem 3rem !important",
      "&:hover": {
        backgroundColor: "rgb(227 139 89) !important",
      },
    },

    productGallery: {
      marginTop: "5rem",
      display: "grid !important",
      gridTemplateColumns: "repeat(5,1fr)",
      gridTemplateRows: "repeat(2,1fr)",
      gap: "1rem",
      [theme.breakpoints.down("sm")]: {
        display: "flex !important",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    galleryImage: {
      borderRadius: "10px",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };
});

export default useStyles;
