import { Grid, Typography } from "@mui/material";

const Price = ({ name, result, color }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      margin={color === "secondary" ? "2rem 0" : "0"}
    >
      <Grid item>
        <Typography
          variant="body1"
          textTransform="uppercase"
          letterSpacing={1.2}
          color="#00000080"
        >
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          fontWeight="bold"
          fontSize="1.1rem"
          color={color}
          letterSpacing={1.2}
        >
          {result}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Price;
