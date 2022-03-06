import { Container } from "@mui/material";
import useStyles from "./styles";
import BackBtn from "../BackBtn/BackBtn";
import Forms from "./Forms/Forms";

const Checkout = () => {
  const classes = useStyles();

  return (
    <section className={classes.checkout}>
      <Container>
        <BackBtn />
        <Forms classes={classes} />
      </Container>
    </section>
  );
};

export default Checkout;
