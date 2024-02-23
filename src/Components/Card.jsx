import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

import styles from "./Card.module.css";
import { shortenText } from "../Helpers/helper";
import { useCart } from "../Constant/CartContext";

function Card({ data }) {
  const { id, image, title, price } = data;

  const [state, dispatch] = useCart();
  console.log(state)

  const addHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={shortenText(title)} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <button onClick={addHandler}>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
