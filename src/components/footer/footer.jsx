import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import styles from "./index.module.scss";

export function Footer() {
  return (
    <footer className={styles.Main}>
      <div className={styles.social}>
        <AiFillFacebook />
        <AiOutlineTwitter />
        <AiFillInstagram />
        <AiFillLinkedin />
      </div>
      <ul className={styles.links}>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Help Center</li>
        <li>Subscription</li>
        <li>FAQ</li>
        <li>CONTACT US</li>
      </ul>
    </footer>
  );
}
