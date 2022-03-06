import { Container, Typography, List, ListItem, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Footer = () => {
  const pages = ["home", "headphones", "speakers", "earphones"];
  const classes = useStyles();

  return (
    <section className={classes.footerContainer}>
      <Container className={classes.footer}>
        <Grid
          container
          spacing={{ md: 5, xs: 3 }}
          className={classes.imgContainer}
        >
          <Grid item md={6} xs={12}>
            <a href="/">
              <img
                src="/images/shared/desktop/logo.svg"
                alt="Logo"
                draggable="false"
              />
            </a>
          </Grid>
          <Grid item md={6} xs={12}>
            <List className={classes.list}>
              {pages.map((pageName) => (
                <ListItem key={pageName} className={classes.listItem}>
                  <Link
                    to={pageName === "home" ? "/" : `/${pageName}`}
                    style={{ color: "white", textDecoration: "none" }}
                    className={classes.link}
                  >
                    {pageName}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body1">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} className={classes.socialContainer}>
            <div className={classes.social}>
              <a href="https://www.facebook.com">
                <FacebookIcon />
              </a>
              <a href="https://www.twitter.com">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com">
                <InstagramIcon />
              </a>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body1">
              Copyright 2021. All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
