import { Typography, Container, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import useStyles from "./styles";

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.loadingPage}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <CircularProgress color="secondary" />
        <Typography
          variant="h3"
          color="secondary"
          fontSize={18}
          fontWeight="bold"
        >
          Loading ...
        </Typography>
      </Box>
    </Container>
  );
};

export default LoadingPage;
