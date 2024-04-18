import { useSelector } from "react-redux";

import BasketCard from "../Components/BasketCard";
import BasketCardSidebar from "../Components/BasketCardSidebar";
// import { useCart } from "../Context/CartContext";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);
  // const [state, dispatch] = useCart();

  // this click handler is for BasketCard and BasketCardSidebar
  // const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketCardSidebar state={state} />
      <div className={styles.products} data-aos="fade-up">
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
