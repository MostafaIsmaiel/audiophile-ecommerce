import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

const Overlay = ({ dispatchFn, check }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      {check && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          className={classes.overlay}
          onClick={() => dispatch(dispatchFn())}
        ></motion.div>
      )}
    </>
  );
};

export default Overlay;
