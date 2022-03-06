import { Container, Typography, Button } from "@mui/material";
import useStyles from "./styles";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Interface = ({ products, isLoaded }) => {
  const classes = useStyles();
  const { category } = useParams();

  return (
    <section
      className={classes.interface}
      style={{ padding: category ? "5rem 0" : "10rem 0" }}
    >
      <Container>
        <div className={category && classes.container}>
          {category ? (
            <Typography
              variant="h2"
              component="h1"
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={{ md: "2.5rem", xs: "2rem" }}
              letterSpacing={6}
            >
              {category}
            </Typography>
          ) : (
            isLoaded && (
              <>
                <motion.div
                  className={classes.backGroundImage}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
                <motion.div
                  className={classes.newProductInfo}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1 }}
                >
                  <Typography
                    variant="h2"
                    component="h1"
                    className={classes.headingTitle}
                  >
                    <Typography variant="body1" className={classes.title}>
                      New product
                    </Typography>
                    XX99 MARK II <br /> HEADPHONES
                  </Typography>
                  <Typography variant="body1" className={classes.paragraph}>
                    Experience natural, life like audio and exceptional build
                    quality made for the passionate music enthusiast.
                  </Typography>
                  <Link
                    to={`/product/${products[3].slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btn}
                    >
                      see product
                    </Button>
                  </Link>
                </motion.div>
              </>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Interface;
