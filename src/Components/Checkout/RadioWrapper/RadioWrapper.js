import { Grid, RadioGroup, FormLabel, Radio, Typography } from "@mui/material";
import useStyles from "../styles";

const RadioWrapper = ({ selectedValue, setSelectedValue }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Grid item xs={12} sm={6}>
      <RadioGroup>
        <Grid container flexDirection="column" gap={2}>
          <Grid item xs={12}>
            <FormLabel
              className={
                selectedValue === "e-money"
                  ? `${classes.active} ${classes.formLabel}`
                  : classes.formLabel
              }
            >
              <Radio
                checked={selectedValue === "e-money"}
                onChange={handleChange}
                value="e-money"
                name="radio-buttons"
                color="secondary"
              />
              <Typography variant="body1" color="primary" fontWeight="bold">
                e-Money
              </Typography>
            </FormLabel>
          </Grid>
          <Grid item xs={12}>
            <FormLabel
              className={
                selectedValue === "cash"
                  ? `${classes.active} ${classes.formLabel}`
                  : classes.formLabel
              }
            >
              <Radio
                checked={selectedValue === "cash"}
                onChange={handleChange}
                value="cash"
                name="radio-buttons"
                color="secondary"
              />
              <Typography variant="body1" color="primary" fontWeight="bold">
                Cash on Delivery
              </Typography>
            </FormLabel>
          </Grid>
        </Grid>
      </RadioGroup>
    </Grid>
  );
};

export default RadioWrapper;
