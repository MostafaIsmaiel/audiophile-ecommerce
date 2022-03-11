import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Tooltip,
  List,
  ListItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleModal } from "../../store/CartModalSlice";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ListItems from "../Home/Categories/ListItems";
import CartModal from "./CartModal";
import Overlay from "../Overlay";
import useStyles from "./style";

const pages = ["home", "headphones", "speakers", "earphones"];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const listVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const NavBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [cartLength, setCartLength] = useState(0);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const cart = useSelector((state) => state.cart);
  const cartModal = useSelector((state) => state.cartModal);

  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (cartModal.openModal) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "visible";
    }
  });

  useEffect(() => {
    if (cart.length > 0) {
      const cartCountersArray = cart.map((product) => product.counter);
      const cartCounterSum = cartCountersArray.reduce(
        (prev, curr) => prev + curr
      );

      setCartLength(cartCounterSum);
    } else {
      setCartLength(0);
    }
  }, [cart]);

  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{ position: "relative", zIndex: "1" }}
    >
      <Container>
        <Toolbar className={classes.toolbar}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                background: "#0000007a",
              }}
            >
              <div className={classes.listContainer}>
                <AnimatePresence initial={false}>
                  {anchorElNav && (
                    <ListItems
                      setAnchorElNav={setAnchorElNav}
                      anchorElNav={anchorElNav}
                    />
                  )}
                </AnimatePresence>
              </div>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: { xs: 1, md: 0 },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <Link to="/">
              <img
                src="/images/shared/desktop/logo.svg"
                alt="Logo"
                className={classes.logo}
                draggable="false"
              />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <List
              className={classes.list}
              component={motion.ul}
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {pages.map((pageName) => (
                <ListItem
                  key={pageName}
                  className={classes.listItem}
                  onClick={handleCloseNavMenu}
                  component={motion.li}
                  variants={listVariant}
                  sx={{ my: 2, display: "block" }}
                >
                  <Link
                    to={pageName === "home" ? "/" : `/${pageName}`}
                    style={{ color: "white", textDecoration: "none" }}
                    className={
                      location.pathname === `/${pageName}`
                        ? `${classes.link} ${classes.active}`
                        : (pageName === "home") & (location.pathname === "/")
                        ? `${classes.link} ${classes.active}`
                        : classes.link
                    }
                  >
                    {pageName}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cart">
              <Badge
                badgeContent={cartLength}
                color="secondary"
                sx={{ cursor: "pointer" }}
                onClick={() => dispatch(toggleModal())}
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Tooltip>
            <AnimatePresence>
              {cartModal.openModal && (
                <CartModal toggleModal={toggleModal} cartLength={cartLength} />
              )}
            </AnimatePresence>
          </Box>
        </Toolbar>
      </Container>
      <AnimatePresence>
        <Overlay dispatchFn={toggleModal} check={cartModal.openModal} />
      </AnimatePresence>
    </AppBar>
  );
};
export default NavBar;
