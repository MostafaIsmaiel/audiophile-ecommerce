import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";

const BackBtn = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Link to onClick={() => navigate(-1)} className={classes.backBtn}>
      go back
    </Link>
  );
};

export default BackBtn;
