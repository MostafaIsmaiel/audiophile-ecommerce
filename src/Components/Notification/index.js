import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { List } from "@mui/material";
import ListItem from "./ListItem";

const Notification = () => {
  const classes = useStyles();
  const notifications = useSelector((state) => state.notification);

  return (
    <List className={classes.list}>
      <AnimatePresence mode={"popLayout"}>
        {notifications.map((notification) => (
          <ListItem
            classes={classes}
            notification={notification}
            key={notification.id}
          />
        ))}
      </AnimatePresence>
    </List>
  );
};

export default Notification;
