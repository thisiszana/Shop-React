import { createContext, useContext, useEffect, useState } from "react";
import api from "../Services/config";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

export default ProductsProvider;
export { useProducts };
