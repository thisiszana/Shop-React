import { createContext, useEffect, useState } from "react";
import api from "../Services/config";

const ProductsContext = createContext();

function ProductsProvider() {
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
      ProductsProvider
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
