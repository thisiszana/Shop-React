import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../Helpers/helper";
import { categories } from "../Constant/list";
import styles from "./Sidebar.module.css";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;

    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((iteem) => (
          <li
            key={iteem.id}
            className={
              iteem.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {iteem.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
