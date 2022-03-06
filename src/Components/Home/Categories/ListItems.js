import { Paper, Typography, List, ListItem, Button } from "@mui/material";
import useStyles from "./styles.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const ListItems = () => {
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
      <motion.div variants={listVariant} className={classes.listItem}>
        <ListItem>
          <Link to="/headphones" className={classes.link}>
            <Paper elevation={0} className={classes.paper}>
              <img
                src="/images/shared/desktop/image-headphones.png"
                alt="Headphone"
                className={classes.categoryImg}
                draggable="false"
              />
              <Typography
                component="h2"
                variant="subtitle1"
                className={classes.typo}
              >
                Headphones
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

      <motion.div variants={listVariant} className={classes.listItem}>
        <ListItem>
          <Link to="/speakers" className={classes.link}>
            <Paper elevation={0} className={classes.paper}>
              <img
                src="/images/shared/desktop/image-speakers.png"
                alt="Speaker"
                className={classes.categoryImg}
                draggable="false"
              />
              <Typography
                component="h2"
                variant="subtitle1"
                className={classes.typo}
              >
                Speakers
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

      <motion.div variants={listVariant} className={classes.listItem}>
        <ListItem>
          <Link to="/earphones" className={classes.link}>
            <Paper elevation={0} className={classes.paper}>
              <img
                src="/images/shared/desktop/image-earphones.png"
                alt="Earphone"
                className={classes.categoryImg}
                draggable="false"
              />
              <Typography
                component="h2"
                variant="subtitle1"
                className={classes.typo}
              >
                Earphones
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
    </List>
  );
};

export default ListItems;
