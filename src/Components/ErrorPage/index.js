import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const ErrorPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.erropage}>
      <Typography variant="h3" color="primary" fontSize={18}>
        Erro page 404 |{" "}
        <Link to="/" className={classes.link}>
          Go to home
        </Link>
      </Typography>
    </Container>
  );
};

export default ErrorPage;
