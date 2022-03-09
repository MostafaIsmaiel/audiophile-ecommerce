import useStyles from "./styles";
import { List } from "@mui/material";
import ListItems from "./ListItem";

const Notification = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItems classes={classes} />
    </List>
  );
};

export default Notification;
