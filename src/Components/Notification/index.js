import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "./CloseButton";
import { add, remove } from "./array-utils";
import useStyles from "./styles";

const Notification = () => {
  const [notifications, setNotifications] = useState([0]);
  const classes = useStyles();

  return (
    <>
      <ul className={classes.list}>
        <AnimatePresence initial={false}>
          {notifications.map((id) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className={classes.listItem}
            >
              <CloseButton
                classes={classes}
                close={() => setNotifications(remove(notifications, id))}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <button
        onClick={() => setNotifications(add(notifications))}
        className={`${classes.button} ${classes.add}`}
      >
        +
      </button>
    </>
  );
};

export default Notification;
