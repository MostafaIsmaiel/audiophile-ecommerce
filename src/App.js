import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/ProductSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import Checkout from "./Components/Checkout/Checkout";
import Notification from "./Components/Notification";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(25, 25, 25)",
    },
    secondary: {
      main: "#d87d4a",
    },
  },
  typography: {
    fontFamily: "Manrope",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
