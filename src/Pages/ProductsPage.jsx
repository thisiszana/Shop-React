import { useEffect, useState } from "react";

import Card from "../Components/Card";
import { useProducts } from "../Context/ProductsContext";
import Loader from "../Components/Loader";

import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../Helpers/helper.js";
import styles from "./ProductsPage.module.css";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox.jsx";
import Sidebar from "../Components/Sidebar.jsx";

function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

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
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
