import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

import styles from "./Card.module.css";
import { shortenText } from "../Helpers/helper";

function Card({ data }) {
  const { id, image, title, price } = data;

  return (
    <div className={styles.card}>
      <img src={image} alt={shortenText(title)}/>
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
