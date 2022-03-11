import { Paper, Typography, List, ListItem, Button } from "@mui/material";
import useStyles from "./styles.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const listVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ListItems = ({ anchorElNav, setAnchorElNav }) => {
  const products = useSelector((state) => state.product.products);
  const categories = new Set(products.map((product) => product.category));

  const classes = useStyles();
  return (
    <List
      className={classes.categoriesList}
      component={motion.ul}
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 3 }}
      exit={{ opacity: 0, transition: 0.2 }}
    >
      {Array.from(categories).map((category) => (
        <motion.div
          variants={listVariant}
          className={classes.listItem}
          key={category}
        >
          <ListItem onClick={() => anchorElNav && setAnchorElNav(null)}>
            <Link to={`/${category}`} className={classes.link}>
              <Paper elevation={0} className={classes.paper}>
                <img
                  src={`/images/shared/desktop/image-${category}.png`}
                  alt={category}
                  className={classes.categoryImg}
                  draggable="false"
                />
                <Typography
                  component="h2"
                  variant="subtitle1"
                  className={classes.typo}
                >
                  {category}
                </Typography>
                <Button
                  className={classes.btn}
                  endIcon={<KeyboardArrowRightIcon color="secondary" />}
                >
                  Shop
                </Button>
              </Paper>
            </Link>
          </ListItem>
        </motion.div>
      ))}
    </List>
  );
};

export default ListItems;
