import { makeStyles } from "@mui/styles";

let titleColor = "#ffffff80";

const useStyles = makeStyles((theme) => {
  return {
    interface: {
      backgroundColor: theme.palette.primary.main,
      width: "100%",

      position: "relative",
      [theme.breakpoints.down("md")]: {
        padding: "8rem 0",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "6rem 0",
      },
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    newProductInfo: {
      width: "25rem",
      position: "relative",
      opacity: "0",
      [theme.breakpoints.down("md")]: {
        margin: "auto",
        textAlign: "center  ",
      },
      [theme.breakpoints.down("sm")]: {
        width: "unset",
      },
      [theme.breakpoints.between("md", "lg")]: {
        transform: "translateX(2.8rem)",
      },
    },
    headingTitle: {
      color: "white",

      fontWeight: `${theme.typography.fontWeightBold} !important`,
      letterSpacing: "1.2px",
      fontSize: "3.5rem !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem !important",
      },
    },
    title: {
      color: titleColor,
      display: "block",
      letterSpacing: "10px",
      fontWeight: `${theme.typography.fontWeightMedium} !important`,
      textTransform: "uppercase",
      fontSize: 14,
      marginBottom: "1.5rem !important",
    },
    paragraph: {
      color: titleColor,
      lineHeight: "1.8 !important",
      fontSize: "1rem !important",
      margin: "1.5rem 0 3rem !important",
    },
    btn: {
      padding: "0.7rem 3rem !important",
      "&:hover": {
        backgroundColor: "rgb(227 139 89) !important",
      },
    },
    backGroundImage: {
      opacity: "0",
      "&::after": {
        content: `""`,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-3rem",
        right: 0,
        backgroundImage: `url("/images/home/desktop/image-hero.jpg")`,
        [theme.breakpoints.down("md")]: {
          backgroundImage: `url("images/home/tablet/image-hero.jpg")`,
        },
        [theme.breakpoints.down("sm")]: {
          backgroundImage: `url("/images/home/mobile/image-hero.jpg"})`,
        },
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      },
    },
  };
});

export default useStyles;
