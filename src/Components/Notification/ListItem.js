import { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Alert, AlertTitle } from "@mui/material";

import { removeNotification } from "../../store/NotificationSlice";

const ListItems = ({ classes, notification }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(removeNotification(notification.id));
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <motion.li
      layout
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      initial={{ opacity: 0.5, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className={classes.listItem}
    >
      <Alert
        sx={{ background: "inherit", padding: "0" }}
        variant="filled"
        icon={<CheckCircleIcon />}
        action={
          <Button
            className={classes.button}
            onClick={() => dispatch(removeNotification(notification.id))}
          >
            <CloseIcon
              style={{
                color: "white",
                fontSize: "1.2rem",
              }}
            />
          </Button>
        }
      >
        <AlertTitle>{notification.message}</AlertTitle>
      </Alert>
    </motion.li>
  );
};

export default ListItems;
