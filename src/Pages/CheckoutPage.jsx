import { useSelector } from "react-redux";

import BasketCard from "../Components/BasketCard";
import BasketCardSidebar from "../Components/BasketCardSidebar";
// import { useCart } from "../Context/CartContext";

import styles from "./CheckoutPage.module.css";

import empty from "../assets/cart-empty.jpg"

function CheckoutPage() {
  const state = useSelector((store) => store.cart);
  // const [state, dispatch] = useCart();

  // this click handler is for BasketCard and BasketCardSidebar
  // const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.emptyBox}>
        <img src={empty} alt="cart empty" />
        <p>Shopping cart is empty!</p>
        <p>But it's never too late to fix it :)</p>
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
