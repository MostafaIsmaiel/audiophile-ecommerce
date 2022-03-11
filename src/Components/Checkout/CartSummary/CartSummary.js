import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import useStyles from "../styles";
import Price from "./Price";
import SummaryList from "./SummaryList";

// export let grandTotal;

const CartSummary = ({ totals }) => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { vat, grandTotal, total, shipping } = totals;

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
        <SummaryList cart={cart} classes={classes} />
      )}

      <section className={classes.priceContainer}>
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
      </section>

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
