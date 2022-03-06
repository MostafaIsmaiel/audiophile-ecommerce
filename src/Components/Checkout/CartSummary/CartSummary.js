import { useSelector } from "react-redux";
import { Grid, Typography, Button, List, ListItem } from "@mui/material";
import useStyles from "../styles";
import Price from "./Price";

const CartSummary = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);

  const shipping = 50;
  let total;
  let vat;
  let grandTotal;

  if (cart.length > 0) {
    const totalArray = cart.map((item) => item.price * item.counter);

    total = totalArray.reduce((prev, curr) => prev + curr);

    vat = total / 5;

    grandTotal = shipping + total + vat;
  }

  return (
    <>
      <Typography
        variant="h5"
        color="primary"
        fontWeight="bold"
        fontSize="1.1rem"
        letterSpacing={1.2}
        textTransform="uppercase"
      >
        Summary
      </Typography>
      {cart.length === 0 ? (
        <Typography
          variant="h3"
          color="#00000080"
          fontSize={16}
          fontWeight="bold"
          textAlign="center"
          padding="15px 0"
        >
          Cart Empty
        </Typography>
      ) : (
        <List>
          {cart.map((item) => {
            const { id, cartImage, shortName, price, counter } = item;

            return (
              <ListItem
                color="primary"
                className={classes.cartListItem}
                key={id}
              >
                <Grid item className={classes.productCartInfo}>
                  <img src={cartImage} alt={shortName} draggable="false" />
                  <Grid item flexDirection="column">
                    <Typography
                      variant="body1"
                      color="primary"
                      fontWeight="bold"
                      fontSize={16}
                    >
                      {shortName}
                    </Typography>
                    <Typography variant="body1" color="#00000080" fontSize={16}>
                      {price * counter}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="#00000080" fontSize={16}>
                    x{counter}
                  </Typography>
                </Grid>
              </ListItem>
            );
          })}
        </List>
      )}

      <Price
        name="total"
        result={
          total
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)
            : "$ 0"
        }
        color="primary"
      />
      <Price name="shipping" result={`$${shipping}`} />
      <Price
        name="vat (included)"
        result={
          vat
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              }).format(vat)
            : "$ 0"
        }
        color="primary"
      />
      <Price
        name="grand total"
        result={
          grandTotal
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(grandTotal)
            : "$ 0"
        }
        color="secondary"
      />
      <Button
        color="secondary"
        variant="contained"
        fullWidth
        type="submit"
        disabled={cart.length > 0 ? false : true}
      >
        Continue & Pay
      </Button>
    </>
  );
};

export default CartSummary;
