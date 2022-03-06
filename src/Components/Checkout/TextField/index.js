import { TextField } from "@mui/material";
import Label from "./Label";
import { useField } from "formik";

const TextfieldWrapper = ({ name, labelname, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    color: "secondary",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
  }

  return (
    <>
      <Label name={labelname} meta={meta} />
      <TextField {...configTextField} sx={{ borderRadius: "15px" }} />
    </>
  );
};

export default TextfieldWrapper;
