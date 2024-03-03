import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./BasketCardSidebar.module.css";

function BasketCardSidebar({
  state: { total, itemsCounter, checkout },
  clickHandler,
}) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity :</p>
        <span>{itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status :</p>
        <span>{!checkout && "Pending ..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT_ITEM")}>Checkout</button>
    </div>
  );
}

export default BasketCardSidebar;
