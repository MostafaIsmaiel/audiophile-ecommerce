import { Grid, Typography, FormLabel } from "@mui/material";
import useStyles from "../styles";

const Label = ({ name, meta }) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="space-between">
      <Grid item className={classes.labelContainer}>
        <FormLabel htmlFor={name} className={classes.label}>
          {name}
        </FormLabel>
      </Grid>
      {meta && meta.touched && meta.error && (
        <Grid item>
          <Typography variant="body1" className={classes.errorMessage}>
            {meta.error}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Label;
