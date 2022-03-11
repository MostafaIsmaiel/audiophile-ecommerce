import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, FormLabel } from "@mui/material";
import TextfieldWrapper from "../TextField";
import CartSummary from "../CartSummary/CartSummary";
import RadioWrapper from "../RadioWrapper/RadioWrapper";
import Emoney from "../PaymentMethods/Emoney";
import Cash from "../PaymentMethods/Cash";
import { togglePurchasingModal } from "../../../store/CompeletePurchasingSlice";

const INTIAL_FORM_STATE = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  emoneyNumber: "",
  emoneyPin: "",
};

const Forms = ({ classes, totals }) => {
  const [selectedValue, setSelectedValue] = useState("e-money");
  const dispatch = useDispatch();

  const requiredField =
    selectedValue === "e-money"
      ? Yup.number().integer().required("Required")
      : Yup.number().integer();

  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.number()
      .integer()
      .typeError("Please enter a valid phone number")
      .required("Required"),
    address: Yup.string().required("Required"),
    zipCode: Yup.number()
      .integer()
      .required("Required")
      .typeError("Wrong format"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    emoneyNumber: requiredField,
    emoneyPin: requiredField,
  });

  return (
    <Formik
      initialValues={{ ...INTIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        dispatch(togglePurchasingModal());
      }}
    >
      <Form>
        <Grid
          container
          gap={2}
          flexWrap="unset"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Grid item xs={12} md={8} className={classes.formGrid}>
            <fieldset className={classes.fieldset}>
              <legend className={classes.legend}>billing details</legend>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextfieldWrapper
                    name="name"
                    id="name"
                    labelname="Name"
                    placeholder="Alexei Ward"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextfieldWrapper
                    name="email"
                    id="email"
                    labelname="Email Address"
                    placeholder="alexei@mail.com"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextfieldWrapper
                    name="phone"
                    id="phone"
                    labelname="Phone Number"
                    placeholder="+1 202-555-0136"
                  />
                </Grid>
              </Grid>
            </fieldset>
            <fieldset className={classes.fieldset}>
              <legend className={classes.legend}>shipping info</legend>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextfieldWrapper
                    name="address"
                    id="address"
                    labelname="Your Address"
                    placeholder="1137 Williams Avenue"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextfieldWrapper
                    name="zipCode"
                    id="zipCode"
                    labelname="Zip Code"
                    placeholder="10001"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextfieldWrapper
                    name="city"
                    id="city"
                    labelname="City"
                    placeholder="New York"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextfieldWrapper
                    name="country"
                    id="country"
                    labelname="Country"
                    placeholder="United States"
                  />
                </Grid>
              </Grid>
            </fieldset>
            <fieldset className={classes.fieldset}>
              <legend className={classes.legend}>payment details</legend>
              <Grid container gap={{ xs: 2, sm: 0 }}>
                <Grid item xs={12} sm={6}>
                  <FormLabel className={classes.label}>
                    Payment Method
                  </FormLabel>
                </Grid>
                <RadioWrapper
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              </Grid>
              {selectedValue === "e-money" ? <Emoney /> : <Cash />}
            </fieldset>
          </Grid>
          <Grid item xs={12} md={4} className={classes.formGrid}>
            <CartSummary totals={totals} />
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default Forms;
