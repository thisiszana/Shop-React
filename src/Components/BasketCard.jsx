import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

import { shortenText } from "../Helpers/helper";
import { decrease, increase, removeItem } from "../Features/Cart/cartSlice";
import styles from "./BasketCard.module.css";

function BasketCard({ data }) {
  const { image, title, quantity } = data;

  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
