import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increasCount,
  decreasCount,
  deleteProduct,
  removeAll,
} from "../../store/CartSlice";
import { Typography, Grid, Button, List, ListItem } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import useStyles from "./style";
import { addNotification } from "../../store/NotificationSlice";

const CartModal = ({ toggleModal }) => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let totalPriceArray;
  let totalPrice;
  if (cart.length > 0) {
    totalPriceArray = cart.map((item) => item.price * item.counter);
    totalPrice = totalPriceArray.reduce(
      (previous, current) => previous + current
    );
  }

  return (
    <motion.div
      className={classes.cartModal}
      key="modal"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      exit={{ opacity: 0, y: 20 }}
    >
      {cart.length > 0 ? (
        <>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography
                variant="h5"
                color="primary"
                fontWeight="bold"
                fontSize="1.1rem"
                letterSpacing={1.2}
              >
                CART ({cart.length})
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.removeAll}
                color="secondary"
                onClick={() => {
                  dispatch(removeAll());
                  dispatch(addNotification("Cart is empty"));
                }}
              >
                remove all
              </Button>
            </Grid>
          </Grid>

          <List>
            {cart.map((item) => {
              const { id, cartImage, shortName, price, counter } = item;
              return (
                <ListItem
                  color="primary"
                  className={classes.cartListItem}
                  key={id}
                >
                  <Grid item xs={6} className={classes.productCartInfo}>
                    <img src={cartImage} alt={shortName} />
                    <Grid item flexDirection="column">
                      <Typography
                        variant="body1"
                        color="primary"
                        fontWeight="bold"
                      >
                        {shortName}
                      </Typography>
                      <Typography variant="body1" color="#00000080">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(price * counter)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={classes.productCartCounter}>
                      <Button
                        onClick={() => {
                          counter > 1 && dispatch(decreasCount(id));
                          counter === 1 && dispatch(deleteProduct(id));
                        }}
                      >
                        -
                      </Button>
                      <Typography variant="body1" color="primary">
                        {counter}
                      </Typography>
                      <Button onClick={() => dispatch(increasCount(id))}>
                        +
                      </Button>
                    </div>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
          <Grid container justifyContent="space-between" margin="1.5rem 0">
            <Grid item>
              <Typography variant="body1" letterSpacing={1.2} color="#00000080">
                Total
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="primary"
                letterSpacing={1.2}
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice)}
              </Typography>
            </Grid>
          </Grid>
          <Link
            to="/checkout"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              onClick={() => dispatch(toggleModal())}
            >
              Checkout
            </Button>
          </Link>
        </>
      ) : (
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            textAlign="center"
            padding={2}
          >
            <Typography variant="h6" color="#00000080">
              Your cart is empty
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" padding={2}>
            <AddShoppingCartOutlinedIcon
              color="primary"
              sx={{ fontSize: { md: "100px", sm: "70px", xs: "50px" } }}
            />
          </Grid>
        </Grid>
      )}
    </motion.div>
  );
};

export default CartModal;
