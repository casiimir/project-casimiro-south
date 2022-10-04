import { useSelector } from "react-redux";
import Particles from "../../components/Particles/Particles";
import Image from "../../utils/images/JapaneseTorii.png";
import styles from "./index.module.scss";

export function Login() {
  const { lang } = useSelector((state) => state);
  return (
    <div className={styles.Main}>
      <div className={styles.left}>
        <h2>{lang.toggle ? "Effettua il Login" : "Login to your account"} </h2>
        <form>
          <label>
            Username
            <input
              type="text"
              name="username"
              autofocus=""
              autocapitalize="none"
              autocomplete="username"
              required=""
              id="id_username"
            />
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              autocomplete="current-password"
              required=""
              id="id_password"
            />
          </label>
          <button type="submit">{lang.toggle ? "Accedi" : "Sign In"}</button>
        </form>
      </div>
      <div className={styles.right}>
        <Particles />
        <img src={Image} alt="Japanese Torii" />
        <div className={styles.text}>
          <h2>{lang.toggle ? "Benvenutə!" : "Welcome!"}</h2>
          <p>
            {lang.toggle
              ? "Accedi e scopri tutte le nostre nuove attività!"
              : "Sign in and discover a great amount of new activities!"}
          </p>
        </div>
      </div>
    </div>
  );
}
