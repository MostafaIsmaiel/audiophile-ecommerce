import TextfieldWrapper from "../TextField";
import { Grid } from "@mui/material";

const Emoney = () => {
  return (
    <Grid container flexWrap="unset" gap={3} marginTop="1rem">
      <Grid item xs={6}>
        <TextfieldWrapper
          name="emoneyNumber"
          labelname="e-Money Number"
          placeholder="238521993"
        />
      </Grid>
      <Grid item xs={6}>
        <TextfieldWrapper
          name="emoneyPin"
          labelname="e-Money PIN"
          placeholder="6891"
        />
      </Grid>
    </Grid>
  );
};

export default Emoney;
