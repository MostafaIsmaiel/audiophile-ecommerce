import { List, ListItem, Grid, Typography } from "@mui/material";
import useStyles from "../styles";

const SummaryList = ({ cart }) => {
  const classes = useStyles();

  return (
    <List className={classes.summaryList}>
      {cart.map((item) => {
        const { id, cartImage, shortName, price, counter } = item;

        return (
          <ListItem color="primary" className={classes.cartListItem} key={id}>
            <Grid item className={classes.productCartInfo}>
              <img src={cartImage} alt={shortName} draggable="false" />
              <Grid item flexDirection="column">
                <Typography
                  variant="body1"
                  color="primary"
                  fontWeight="bold"
                  fontSize={16}
                >
                  {shortName}
                </Typography>
                <Typography variant="body1" color="#00000080" fontSize={16}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(price * counter)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="#00000080" fontSize={16}>
                x{counter}
              </Typography>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SummaryList;
