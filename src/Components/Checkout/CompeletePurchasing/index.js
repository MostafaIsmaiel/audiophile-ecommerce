import { useSelector, useDispatch } from "react-redux";
import { Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SummaryList from "../CartSummary/SummaryList";
import { grandTotal } from "../CartSummary/CartSummary";
import { removeAll } from "../../../store/CartSlice";
import { togglePurchasingModal } from "../../../store/CompeletePurchasingSlice";
import useStyles from "../styles";

const CompeletePurchasing = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <motion.section
      key="purchase"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      exit={{ opacity: 0 }}
      className={classes.compeletePurchasing}
    >
      <Grid
        container
        gap="2rem"
        maxWidth={{ md: "33rem" }}
        padding={{ md: "3rem", xs: "2rem" }}
      >
        <Grid item xs={12}>
          <img
            src="/images/shared/desktop/icon-check-mark.svg"
            alt="check mark"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h3"
            fontWeight="bold"
            fontSize="2rem"
            color="primary"
            textTransform="uppercase"
          >
            thank you
            <Typography display="block" fontSize="1em" fontWeight="bold">
              for your order
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" color="#00000080" fontSize="15px">
            You will receive an email confirmation shortly.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container borderRadius="10px" sx={{ overflow: "hidden" }}>
            <Grid
              item
              xs={12}
              md={7}
              sx={{ background: "#F1F1F1" }}
              padding="1rem"
            >
              <SummaryList cart={cart} />
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              sx={{ background: "rgb(25, 25, 25)" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              padding="2rem"
            >
              <Typography
                variant="body1"
                color="rgba(255,255,255,0.5)"
                fontSize="15px"
                textTransform="uppercase"
              >
                grand total
              </Typography>
              <Typography
                variant="body1"
                fontSize="15px"
                color="white"
                fontWeight="bold"
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(grandTotal)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => {
                dispatch(removeAll());
                dispatch(togglePurchasingModal());
              }}
            >
              back to home
            </Button>
          </Link>
        </Grid>
      </Grid>
    </motion.section>
  );
};

export default CompeletePurchasing;
