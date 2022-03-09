import { useSelector, useDispatch } from "react-redux";
import { Button, ListItem, Alert, AlertTitle } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { removeNotification } from "../../store/NotificationSlice";

const ListItems = ({ classes }) => {
  const notifications = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {notifications.map((notification) => {
        setTimeout(() => {
          dispatch(removeNotification(notification.id));
        }, 4000);

        return (
          <ListItem
            key={notification.id}
            component={motion.li}
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
                    }}
                  />
                </Button>
              }
            >
              <AlertTitle>{notification.message}</AlertTitle>
            </Alert>
          </ListItem>
        );
      })}
    </AnimatePresence>
  );
};

export default ListItems;
