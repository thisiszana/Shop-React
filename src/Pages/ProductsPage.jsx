import Card from "../Components/Card";
import { useProducts } from "../Context/ProductsContext";
import Loader from "../Components/Loader";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>SideBar</div>
      </div>
    </div>
  );
}

export default ProductsPage;
