import { useEffect } from "react";

import { Link } from "react-router-dom";
import AOS from "aos";

// import { useCart } from "../Context/CartContext";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { productQuantity, shortenText } from "../Helpers/helper";
import styles from "./Card.module.css";
import "aos/dist/aos.css";

function Card({ data }) {
  const { id, image, title, price } = data;

  // const [state, dispatch] = useCart();

  // const quantity = productQuantity(state, id);
  const quantity = 0;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const clickHandler = (type) => {
    // dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card} data-aos="fade-up-right">
      <img src={image} alt={shortenText(title)} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}

          {!!quantity && <span>{quantity}</span>}

          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
