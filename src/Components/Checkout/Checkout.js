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

  return (
    <section className={classes.checkout}>
      <Container>
        <BackBtn />
        <Forms classes={classes} />
        <AnimatePresence>
          <Overlay check={purchasingModal} dispatchFn={togglePurchasingModal} />
        </AnimatePresence>
      </Container>
      <AnimatePresence>
        {purchasingModal && <CompeletePurchasing />}
      </AnimatePresence>
    </section>
  );
};

export default Checkout;
