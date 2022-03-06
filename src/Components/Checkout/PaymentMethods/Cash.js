import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Grid, Typography } from "@mui/material";

const Cash = () => {
  return (
    <Grid
      container
      display="grid"
      gap={3}
      gridTemplateColumns="auto 1fr"
      alignItems="center"
      marginTop="2rem"
    >
      <AccountBalanceWalletOutlinedIcon color="secondary" fontSize="large" />
      <Typography
        variant="body1"
        color="#00000080"
        fontSize={15}
        fontWeight="regular"
      >
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </Typography>
    </Grid>
  );
};

export default Cash;
