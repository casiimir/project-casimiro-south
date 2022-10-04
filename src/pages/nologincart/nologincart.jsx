import { TbUserExclamation } from "react-icons/tb";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";

export function NoLoginCart() {
  const { lang } = useSelector((state) => state);

  return (
    <div className={styles.Main}>
      <div className={styles.icon}>
        <TbUserExclamation />
      </div>
      <div className={styles.message}>
        <h2> {lang.toggle ? "IL CARRELLO È VUOTO" : "YOUR CART IS EMPTY"} </h2>
        <div className={styles.description}>
          <p>
            {lang.toggle
              ? "Devi essere loggato per accedere al carrello."
              : "You must be logged in to access the cart."}
          </p>
          <p>
            {lang.toggle
              ? "Per favore, accedi al tuo account e prova ad effettuare un acquisto."
              : "Please, Login and try again."}
          </p>
        </div>
      </div>
    </div>
  );
}
