import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AOS from "aos";

// import { useCart } from "../Context/CartContext";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { productQuantity, shortenText } from "../Helpers/helper";
import styles from "./Card.module.css";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../Features/Cart/cartSlice";

function Card({ data }) {
  const { id, image, title, price } = data;

  const state = useSelector((store) => store.cart);
  // const [state, dispatch] = useCart();

  const dispatch = useDispatch();

  const quantity = productQuantity(state, id);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // const clickHandler = (type) => {
  //   dispatch({ type, payload: data });
  // };

  return (
    <div className={styles.card}>
      <img src={image} alt={shortenText(title)} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}

          {!!quantity && <span>{quantity}</span>}

          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
