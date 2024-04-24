import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

import styles from "./404.module.css";

function PageNotFound() {
  return (
    <div className={styles.container404}>
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link to="/">
        <FaArrowLeftLong />
        Back to home page
      </Link>
    </div>
  );
}

export default PageNotFound;
