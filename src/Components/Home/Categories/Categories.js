import { Container } from "@mui/material";
import useStyles from "./styles.js";

import ListItems from "./ListItems.js";

const Categories = () => {
  const classes = useStyles();

  return (
    <section className={classes.categories}>
      <Container>
        <div className={classes.categoriesContainer}>
          <ListItems />
        </div>
      </Container>
    </section>
  );
};

export default Categories;
