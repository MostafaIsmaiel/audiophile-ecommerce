import { useEffect } from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import Interface from "../Home/Interface/Interface";
import Categories from "../Home/Categories/Categories";
import Producer from "../Producer/Producer";
import useStyles from "./styles";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";

const CategoryPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const { category } = useParams();
  const { products, isLoaded } = useSelector((state) => state.product);

  // Filtering products as per category
  const categories = products.filter(
    (product) => product.category === category
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location.pathname]);

  if (isLoaded && categories.length > 0) {
    return (
      <>
        <Interface />
        <section className={classes.category}>
          <Container>
            {categories.map((product, index) => {
              const { id, categoryImage, name, description, slug } = product;
              return (
                <div className={classes.categoryContainer} key={id}>
                  <Grid
                    container
                    spacing={{ md: 12, xs: 3 }}
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                      md={6}
                      className={classes.productImage}
                      order={{ md: (index + 1) % 2 === 0 && 2 }}
                    >
                      <picture>
                        <source
                          media="(max-width:600px )"
                          srcSet={categoryImage.mobile}
                        />
                        <source
                          media="(max-width:900px )"
                          srcSet={categoryImage.tablet}
                        />
                        <img
                          src={categoryImage.desktop}
                          alt={name}
                          draggable="false"
                        />
                      </picture>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      gap={3}
                      display="flex"
                      flexDirection="column"
                      alignItems={{ xs: "center", md: "flex-start" }}
                      textAlign={{ xs: "center", md: "start" }}
                    >
                      {product.new && (
                        <Typography
                          variant="body1"
                          color="secondary"
                          fontSize="1rem"
                          fontWeight="normal"
                          letterSpacing={5}
                          textTransform="uppercase"
                          wordSpacing="3px"
                        >
                          New Product
                        </Typography>
                      )}

                      <Typography
                        variant="h3"
                        color="primary"
                        fontWeight="bold"
                        fontSize="2rem"
                        width={220}
                        lineHeight={1.3}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontSize="1.1rem"
                        className={classes.description}
                        width={{ md: "100%", xs: "80%" }}
                      >
                        {description}
                      </Typography>
                      <Link
                        to={`/${category}/${slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          color="secondary"
                          variant="contained"
                          className={classes.seeProductBtn}
                        >
                          see product
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </Container>
        </section>
        <Categories />
        <Producer />
      </>
    );
  }

  if (isLoaded && categories.length === 0) return <ErrorPage />;

  return <LoadingPage />;
};

export default CategoryPage;
