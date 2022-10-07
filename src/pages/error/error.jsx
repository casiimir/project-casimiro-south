import { useSelector } from "react-redux";
import Cat from "../../utils/images/cat.gif";
import styles from "./index.module.scss";

export function Error(props) {
  const { lang } = useSelector((state) => state);

  return props.status === 404 ? (
    <div className={styles.Main}>
      <img src={Cat} alt="Japanese cat" />
      <div className={styles.message}>
        <h2> {lang.toggle ? "CI DISPIACE TANTO!" : "WE ARE SORRY!"} </h2>
        <h3>
          {lang.toggle
            ? "Sfortunatamente, qualcosa è andato storto!"
            : "Unfortunately, something went wrong!"}
        </h3>
        <marquee behavior="alternate">
          {lang.toggle
            ? "Stiamo provando a risolvere il problema!"
            : "We are trying to fix this."}
        </marquee>
      </div>
      <p>
        <a href="https://giphy.com/gifs/Fuzzballs-cute-kawaii-fuzzballs-Vh8ZgUsuFBEmquomvp">
          credits to: GIPHY ❤️
        </a>
      </p>
    </div>
  ) : (
    "We are sooooo sorry. Unfortunately, something went wrong!"
  );
}
