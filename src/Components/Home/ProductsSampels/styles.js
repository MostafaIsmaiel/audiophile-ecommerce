import { makeStyles } from "@mui/styles";

const borderRadius = "10px";

const useStyles = makeStyles((theme) => {
  return {
    sampels: {
      display: "flex !important",
      flexDirection: "column",
      gap: 30,
    },
    speakerSample9: {
      background: `url("/images/home/desktop/pattern-circles.svg") ${theme.palette.secondary.main} no-repeat `,
      backgroundSize: "cover",
      overflow: "hidden",
      borderRadius: borderRadius,
      backgroundPosition: "-15rem -10rem",
      [theme.breakpoints.down("md")]: {
        backgroundPosition: "center -12rem",
      },
      [theme.breakpoints.down("sm")]: {
        backgroundPosition: "center -8rem",
      },
    },
    speakerImage9: {
      [theme.breakpoints.up("md")]: {
        width: "26rem",
        transform: "translateY(20px)",
      },
      [theme.breakpoints.between("sm", "md")]: {
        width: "13rem",
      },
      [theme.breakpoints.between("xs", "sm")]: {
        width: "9rem",
      },
    },
    speakerArticle9: {
      display: "flex",
      flexDirection: "column !important",
      gap: 20,
      alignItems: "start",
      [theme.breakpoints.up("md")]: {
        padding: "2.5rem 0 0 4rem!important",
      },
      [theme.breakpoints.down("md")]: {
        padding: "3rem 1rem!important",
        alignItems: "center",
        textAlign: "center",
      },
    },
    speakerHeading9: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "36px !important",
      },
    },
    speakerParagraph9: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px !important",
      },
    },
    button: {
      padding: "10px 25px  !important",
    },
    speakerSample7: {
      background: `url("/images/home/desktop/image-speaker-zx7.jpg") no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "7rem 5rem",
      borderRadius: borderRadius,
      [theme.breakpoints.down("md")]: {
        background: `url("/images/home/tablet/image-speaker-zx7.jpg") no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      [theme.breakpoints.down("sm")]: {
        background: `url("/images/home/mobile/image-speaker-zx7.jpg") no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },

    productIn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: 20,
      width: "fit-content",
    },
    earphoneImg: {
      overflow: "hidden",
      "& img": {
        width: "100% !important",
        borderRadius,
      },
    },
    productPaper: {
      paddingLeft: "5rem",
      display: "flex",
      alignItems: "center",
      height: "100%",
      borderRadius,
      backgroundColor: "#F1F1F1 !important",

      [theme.breakpoints.down("md")]: {
        paddingLeft: 0,
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "3rem",
      },
    },
  };
});

export default useStyles;
