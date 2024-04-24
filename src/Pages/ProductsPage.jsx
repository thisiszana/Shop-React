import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { useProducts } from "../Context/ProductsContext";
import { fetchProducts } from "../Features/Product/productSlice";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../Helpers/helper.js";
import styles from "./ProductsPage.module.css";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox.jsx";
import Sidebar from "../Components/Sidebar.jsx";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);

  // const products = useProducts();

  // const products = [];

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <Sidebar query={query} setQuery={setQuery} />
        <div className={styles.products}>
          {loading && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
