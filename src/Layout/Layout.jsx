import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

// import { useCart } from "../Context/CartContext";

import styles from "./Layout.module.css";

function Layout({ children }) {

  // const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Z-Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {/* {!!state.itemsCounter && <span>{state.itemsCounter}</span>} */}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Zana with <span>❤</span></p>
      </footer>
    </>
  );
}

export default Layout;
