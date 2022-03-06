import { Grid, Typography, Container } from "@mui/material";
import useStyles from "./styles";
import { motion } from "framer-motion";

const Producer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.producerContainer}>
      <Grid container spacing={3}>
        <Grid
          item
          md={6}
          xs={12}
          order={{ xs: 2, md: 1 }}
          className={classes.paragraph}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h2" color="primary">
              BRINGING YOU THE <span>BEST</span> AUDIO GEAR
            </Typography>
            <Typography variant="body1" color="primary">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item md={6} xs={12} order={{ xs: 1, md: 2 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <picture>
              <source
                media="(max-width:600px)"
                srcSet="\images\shared\mobile\image-best-gear.jpg"
              />
              <source
                media="(max-width:900px)"
                srcSet="\images\shared\tablet\image-best-gear.jpg"
              />
              <img
                src="\images\shared\desktop\image-best-gear.jpg"
                alt="Best Gear"
                draggable="false"
              />
            </picture>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Producer;
