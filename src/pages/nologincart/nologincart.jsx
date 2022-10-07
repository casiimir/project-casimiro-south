import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TbUserExclamation } from "react-icons/tb";
import styles from "./index.module.scss";

export function NoLoginCart() {
  const { lang } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      if (localStorage.getItem("cart_list")) navigate("/cart");
      else navigate("/emptycart");
    }
  }, []);

  return (
    <div className={styles.Main}>
      <div className={styles.icon}>
        <TbUserExclamation />
      </div>
      <div className={styles.message}>
        <h2>{lang.toggle ? "NON SEI REGISTRATO!" : "YOU'RE NOT LOGGED IN!"}</h2>
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
