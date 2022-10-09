import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Particles } from "../../components/Particles";
import Image from "../../utils/images/JapaneseTorii.png";
import styles from "./index.module.scss";

export function Login() {
  const { lang } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);
  const goBack = useNavigate();
  const location = useLocation();

  const handleOnChange = (e, setter) => setter(e.target.value);

  const handlePwVisibility = () => setIsPwVisible((prev) => !prev);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", inputValue);
    setInputValue("");
    setPwValue("");
    location.state.prev === "/emptycart" ? goBack("/cart") : goBack(-1);
  };

  useLayoutEffect(() => {
    localStorage.getItem("username") && goBack(-1);
  }, []);

  return (
    <div className={styles.Main}>
      <div className={styles.left}>
        <h2>{lang.toggle ? "Effettua il Login" : "Login to your account"} </h2>
        <form type="submit" onSubmit={(e) => handleOnSubmit(e)}>
          <label>
            Username
            <span className={styles.input_box}>
              <input
                className={styles.input}
                type="text"
                name="username"
                required={true}
                placeholder={
                  lang.toggle ? "Inserisci username..." : "Insert username..."
                }
                value={inputValue}
                onChange={(e) => handleOnChange(e, setInputValue)}
              />
            </span>
          </label>
          <label>
            Password
            <span className={styles.input_box}>
              <input
                className={styles.pw}
                type={isPwVisible ? "text" : "password"}
                name="password"
                required={true}
                placeholder={
                  lang.toggle ? "Inserisci password..." : "Insert password..."
                }
                value={pwValue}
                onChange={(e) => handleOnChange(e, setPwValue)}
              />
              <span onClick={handlePwVisibility}>
                {isPwVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </span>
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
