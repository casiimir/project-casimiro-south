import Basket from "./../../utils/images/basket.png";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";

export function ThankYou() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();
  let cTime =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();
  let dateTime = cDate + " " + cTime;

  const { lang } = useSelector((state) => state);
  return (
    <div className={styles.Main}>
      <img src={Basket} alt="basket icon" />
      <div className={styles.message}>
        <h2> {lang.toggle ? "Grazie!" : "Thank You!"} </h2>
        <p> item q, price</p>
        <h3>
          {lang.toggle
            ? "Hai completatoto il tuo ordine con successo!"
            : "Your order was placed successfully!"}
        </h3>
        <div className={styles.description}>
          <p>
            {lang.toggle
              ? "Il tuo ordine: " + Math.random()
              : "Your order: " + Math.random()}
          </p>
          <p>
            {lang.toggle
              ? "Data dell'ordine: " + dateTime
              : "Order date: " + dateTime}
          </p>
        </div>
      </div>
    </div>
  );
}
