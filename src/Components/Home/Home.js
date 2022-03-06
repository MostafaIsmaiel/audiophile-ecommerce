import { useEffect } from "react";
import { useSelector } from "react-redux";
import Interface from "./Interface/Interface";
import Categories from "./Categories/Categories";
import ProductsSampels from "./ProductsSampels/ProductsSampels";
import Producer from "../Producer/Producer";

const Home = () => {
  const { products, isLoaded } = useSelector((state) => state.product);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <main>
      <Interface products={products} isLoaded={isLoaded} />
      <Categories />
      <ProductsSampels products={products} isLoaded={isLoaded} />
      <Producer />
    </main>
  );
};

export default Home;
