import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addProduct } from "../../store/CartSlice";
import { addNotification } from "../../store/NotificationSlice";
import {
  Container,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
} from "@mui/material";
import Categories from "../Home/Categories/Categories";
import Producer from "../Producer/Producer";
import BackBtn from "../BackBtn/BackBtn";
import useStyles from "./styles";

const ProductPage = () => {
  const classes = useStyles();
  const [counter, setCounter] = useState(1);
  const location = useLocation();
  const { slug } = useParams();
  const { products, isLoaded } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // Finding product
  const product = products.find((product) => product.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location.pathname]);

  return (
    <>
      {isLoaded && (
        <section className={classes.product}>
          <Container>
            <BackBtn />
            <Grid
              container
              alignItems="center"
              className={classes.productContainer}
              gap={{ md: "8rem", xs: "2rem" }}
              flexDirection={{ md: "row", xs: "column" }}
            >
              <Grid item xs={12} md={6} className={classes.productImage}>
                <picture>
                  <source
                    media="(max-width:600px )"
                    srcSet={product.categoryImage.mobile}
                  />
                  <source
                    media="(max-width:900px )"
                    srcSet={product.categoryImage.tablet}
                  />
                  <img
                    src={product.categoryImage.desktop}
                    alt={product.name}
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
                <Typography
                  variant="h2"
                  color="primary"
                  fontWeight="bold"
                  fontSize="2.5rem"
                  width={330}
                  lineHeight={1.3}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="1.1rem"
                  className={classes.description}
                  width={{ md: "100%", xs: "80%" }}
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  fontWeight="bold"
                  fontSize="1.1rem"
                >
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.price)}
                </Typography>
                <div
                  className={classes.addToCart}
                  alignitems="center"
                  justifycontent="space-evenly"
                >
                  <div className={classes.productCartCounter}>
                    <Button
                      onClick={() =>
                        counter > 1 && setCounter((value) => value - 1)
                      }
                    >
                      -
                    </Button>
                    <Typography variant="body1" color="primary">
                      {counter}
                    </Typography>
                    <Button onClick={() => setCounter((value) => value + 1)}>
                      +
                    </Button>
                  </div>

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.addToCartBtn}
                    onClick={() => {
                      dispatch(addProduct({ product, counter }));
                      dispatch(
                        addNotification(
                          `Item "${product.name}" was added to cart`
                        )
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              marginTop={"5rem"}
              gap={8}
              flexWrap={{ md: "unset" }}
            >
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h2"
                  fontSize={"2rem"}
                  fontWeight="bold"
                  color="primary"
                  textTransform="uppercase"
                  marginBottom="1.5rem"
                >
                  features
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={"1rem"}
                  color="#00000080"
                  fontWeight="normal"
                  lineHeight="1.6"
                  whiteSpace="pre-line"
                >
                  {product.features}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={5}
                display="flex"
                flexDirection={{ xs: "row", md: "column" }}
                gap={{ xs: 5, sm: 20, md: 3 }}
              >
                <Typography
                  variant="h2"
                  fontSize={"2rem"}
                  fontWeight="bold"
                  color="primary"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  in the box
                </Typography>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                  disablePadding
                >
                  {product.includedItems.map((item) => (
                    <ListItem
                      sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                      }}
                      disablePadding
                      key={item.item}
                    >
                      <Typography
                        variant="body2"
                        color="secondary"
                        fontWeight="bold"
                        fontSize={18}
                      >
                        x{item.quantity}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#00000080"
                        textTransform="capitalize"
                        fontWeight="light"
                        fontSize={16}
                      >
                        {item.item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
            <Grid container className={classes.productGallery}>
              <Grid item gridArea={{ sm: "1 / span 2 " }}>
                <picture>
                  <source
                    media="(max-width:600px )"
                    srcSet={product.gallery.first.mobile}
                  />
                  <source
                    media="(max-width:900px )"
                    srcSet={product.gallery.first.tablet}
                  />
                  <img
                    src={product.gallery.first.desktop}
                    alt="xx99-mark-two"
                    draggable="false"
                    className={classes.galleryImage}
                  />
                </picture>
              </Grid>
              <Grid item gridArea={{ sm: "2 / span 2 " }} width="100%">
                <picture>
                  <source
                    media="(max-width:600px )"
                    srcSet={product.gallery.second.desktop}
                  />
                  <source
                    media="(max-width:900px )"
                    srcSet={product.gallery.second.desktop}
                  />
                  <img
                    src={product.gallery.second.desktop}
                    alt="xx99-mark-two"
                    draggable="false"
                    className={classes.galleryImage}
                  />
                </picture>
              </Grid>
              <Grid item gridArea={{ sm: "1 / 3 / span 2 / span 3" }}>
                <picture>
                  <source
                    media="(max-width:600px )"
                    srcSet={product.gallery.third.mobile}
                  />
                  <source
                    media="(max-width:900px )"
                    srcSet={product.gallery.third.tablet}
                  />
                  <img
                    src={product.gallery.third.desktop}
                    alt="xx99-mark-two"
                    draggable="false"
                    className={classes.galleryImage}
                  />
                </picture>
              </Grid>
            </Grid>
          </Container>
        </section>
      )}

      <Categories />
      <Producer />
    </>
  );
};

export default ProductPage;
