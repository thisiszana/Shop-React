import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

import Loader from "../Components/Loader";
// import { useProductDetails } from "../Context/ProductsContext";

import styles from "./DetailsPage.module.css";
import { fetchProducts } from "../Features/Product/productSlice.js";

function DetailsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { id } = useParams();
  const productDetails = useSelector((store) =>
    store.product.products.find((i) => i.id === +id)
  );

  // const productDetails = useProductDetails(+id);

  // const { image, title, description, category, price } = productDetails;

  if (!productDetails) return <Loader />;

  return (
    <div className={styles.container} data-aos="fade-up-right">
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject /> {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag /> {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft /> <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
