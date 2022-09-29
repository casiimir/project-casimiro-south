import { useSelector } from "react-redux";
import styles from "./index.module.scss";

export function Error(props) {

  const { lang } = useSelector((state) => state);

  return props.status === 404 ? (
    <div className={styles.Main}>
      <iframe
        src="https://giphy.com/embed/Vh8ZgUsuFBEmquomvp"
        width="480"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <div className={styles.message}>
        <h2> {lang.toggle ? 'CI DISPIACE TANTO!' : 'WE ARE SOOOO SORRY!'} </h2>
        <h3> {lang.toggle ? 'Sfortunatamente, qualcosa è andato storto!' : 'Unfortunately, something went wrong!'} </h3>
        <marquee behavior='alternate'>{lang.toggle ? 'Stiamo provando ad risolvere il problema!' : 'We are trying to fix this.'}</marquee>
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


