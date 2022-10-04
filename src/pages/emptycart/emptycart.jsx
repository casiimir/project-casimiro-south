import { TbShoppingCartX } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";

export function EmptyCart() {
  const { lang } = useSelector((state) => state);

  return (
    <div className={styles.Main}>
      <div className={styles.icon}>
        <TbShoppingCartX />{" "}
      </div>
      <div className={styles.message}>
        <h2> {lang.toggle ? "IL CARRELLO È VUOTO" : "YOUR CART IS EMPTY"} </h2>
        <div className={styles.description}>
          <p>
            {lang.toggle
              ? "Sembra che tu non abbia aggiunto nulla al carrello. "
              : "Looks like you have not added anything to your cart. "}
          </p>
          <p>
            {lang.toggle
              ? "Per favore, esplora le nostre sezioni e trova le attività perfette per te e i tuoi amici."
              : "Please, explore our sections and find the perfect activity for you and your friends."}
          </p>
        </div>
      </div>
      <button className={styles.explore_btn}>
        <Link to="/explore" title="Navigate to Explore tab">
          {lang.toggle ? "Esplora Ora" : "Explore Now"}
        </Link>
      </button>
    </div>
  );
}
