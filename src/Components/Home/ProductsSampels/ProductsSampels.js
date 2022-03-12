import { Typography, Container, Button, Grid, Paper } from "@mui/material";
import useStyles from "./styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductsSampels = ({ products, isLoaded }) => {
  const classes = useStyles();

  return (
    <Container className={classes.sampels}>
      <motion.div
        className={classes.speakerSample9}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Grid
          container
          paddingTop={{ md: 10, xs: 6 }}
          paddingX={{ md: 5, xs: 3 }}
          className={classes.spekerContainer9}
        >
          <Grid item md={6} xs={12} display="flex" justifyContent="center">
            <img
              src="/images/home/desktop/image-speaker-zx9.png"
              alt="speaker-zx9"
              className={classes.speakerImage9}
              draggable="false"
            />
          </Grid>
          <Grid item md={6} xs={12} className={classes.speakerArticle9}>
            <Typography
              variant="h2"
              color="white"
              fontWeight="bold"
              letterSpacing={5}
              className={classes.speakerHeading9}
            >
              ZX9 <br /> SPEAKER
            </Typography>
            <Typography
              variant="body1"
              color="white"
              fontWeight="200"
              paddingY={{ md: 2 }}
              width={{ xs: 300, sm: 350 }}
              className={classes.speakerParagraph9}
            >
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
            <Link
              to={isLoaded && `/${products[5].category}/${products[5].slug}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                See Product
              </Button>
            </Link>
          </Grid>
        </Grid>
      </motion.div>

      <motion.div
        className={classes.speakerSample7}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={classes.productIn}>
          <Typography variant="h2" fontWeight="bold" fontSize="1.75rem">
            ZX7 SPEAKER
          </Typography>
          <Link
            to={isLoaded && `/${products[4].category}/${products[4].slug}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              sx={{ "&:hover": { backgroundColor: "#191919", color: "white" } }}
            >
              see product
            </Button>
          </Link>
        </div>
      </motion.div>

      <Grid container spacing={2}>
        <Grid item sm={6}>
          <motion.div
            className={classes.earphoneImg}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <picture>
              <source
                media="(max-width:600px )"
                srcSet="/images/home/mobile/image-earphones-yx1.jpg"
              />
              <source
                media="(max-width:900px )"
                srcSet="/images/home/tablet/image-earphones-yx1.jpg"
              />
              <img
                src="/images/home/desktop/image-earphones-yx1.jpg"
                alt="earphoneSample"
                draggable="false"
              />
            </picture>
          </motion.div>
        </Grid>
        <Grid item sm={6} width="100%">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={classes.productPaper}
          >
            <Paper elevation={0} sx={{ backgroundColor: "initial" }}>
              <div className={classes.productIn}>
                <Typography variant="h2" fontWeight="bold" fontSize="1.75rem">
                  YX1 EARPHONES
                </Typography>
                <Link
                  to={
                    isLoaded && `/${products[0].category}/${products[0].slug}`
                  }
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    sx={{
                      "&:hover": { backgroundColor: "#191919", color: "white" },
                    }}
                  >
                    see product
                  </Button>
                </Link>
              </div>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsSampels;
