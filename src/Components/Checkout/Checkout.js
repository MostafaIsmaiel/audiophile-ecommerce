import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { Container } from "@mui/material";
import CompeletePurchasing from "./CompeletePurchasing";
import { togglePurchasingModal } from "../../store/CompeletePurchasingSlice";
import BackBtn from "../BackBtn/BackBtn";
import Forms from "./Forms/Forms";
import Overlay from "../Overlay";
import useStyles from "./styles";
const Checkout = () => {
  const classes = useStyles();
  const purchasingModal = useSelector(
    (state) => state.purchasingModal.openModal
  );
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const shipping = 50;

  useEffect(() => {
    if (cart.length > 0) {
      const totalArray = cart.map((item) => item.price * item.counter);
      const finalTotal = totalArray.reduce((prev, curr) => prev + curr);

      setTotal(finalTotal);

      setVat(total / 5);

      setGrandTotal(shipping + total + vat);
    } else {
      setTotal(0);
      setVat(0);
      setGrandTotal(0);
    }
  }, [cart, total, vat]);

  return (
    <section className={classes.checkout}>
      <Container>
        <BackBtn />
        <Forms
          classes={classes}
          totals={{ total, grandTotal, vat, shipping }}
        />
        <AnimatePresence>
          <Overlay check={purchasingModal} dispatchFn={togglePurchasingModal} />
        </AnimatePresence>
      </Container>
      <AnimatePresence>
        {purchasingModal && <CompeletePurchasing grandTotal={grandTotal} />}
      </AnimatePresence>
    </section>
  );
};

export default Checkout;
