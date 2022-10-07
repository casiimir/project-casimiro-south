import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineEuro,
  AiOutlineDollar,
  AiOutlineMenu,
} from "react-icons/ai";
import Logo from "../../utils/images/logos/japventure-logo-32.svg";
import SearchBar from "../SearchBar/index";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import UserModal from "../UserModal";

export function Navbar() {
  const { lang, currency, listsData } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChangeLang = () => {
    dispatch({ type: "CHANGE_LANG" });
  };

  const handleChangeCurr = () => {
    dispatch({ type: "CHANGE_CURRENCY" });
  };

  const [isModalVisible, setModalVisibility] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("username") || ""
  );
  const [checked, setChecked] = useState(false);
  const onHandleCheck = () => setChecked((prev) => !prev);

  useEffect(() => {
    localStorage.getItem("username") &&
      setUserLoggedIn(localStorage.getItem("username"));
  }, [localStorage.getItem("username")]);

  return (
    <>
      <div className={styles.desktop}>
        <nav className={styles.Main}>
          <NavLink
            to="/"
            title="Navigate to Home tab"
            className={styles.link}
            end
          >
            <img src={Logo} className={styles.logo} />
          </NavLink>

          <span className={styles.links}>
            <NavLink
              to="/explore"
              title="Navigate to Explore tab"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              end
            >
              {lang.toggle ? "Esplora" : "Explore"}
            </NavLink>
            <NavLink
              to="/cities"
              title="Navigate to Cities tab"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              end
            >
              {lang.toggle ? "Città" : "Cities"}
            </NavLink>
            <NavLink
              to="/about"
              title="Navigate to About Us tab"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              end
            >
              {lang.toggle ? "Chi Siamo" : "About Us"}
            </NavLink>
          </span>
          <span className={styles.tools}>
            <span className={styles.user}>
              <AiOutlineUser onClick={() => setModalVisibility(true)} />
            </span>
            <Link
              to={
                !localStorage.getItem("username")
                  ? "/nologincart"
                  : !localStorage.getItem("cart_list") ||
                    !JSON.parse(localStorage.getItem("cart_list")).length
                  ? "/emptycart"
                  : "/cart"
              }
              className={styles.cart}
            >
              <AiOutlineShoppingCart />
              {listsData.cartList.length ? (
                <span className={styles.cart_length}>
                  {listsData.cartList.length}
                </span>
              ) : null}
            </Link>
            <span className={styles.language} onClick={handleChangeLang}>
              {lang.toggle ? "ITA" : "ENG"}
            </span>
            <span className={styles.currency} onClick={handleChangeCurr}>
              {currency.toggle ? <AiOutlineEuro /> : <AiOutlineDollar />}
            </span>
            <SearchBar />
          </span>
        </nav>
      </div>

      <div className={styles.mobile}>
        <NavLink
          to="/"
          title="Navigate to Home tab"
          className={styles.link}
          end
        >
          <img src={Logo} className={styles.logo} />
          <span className={styles.tools}></span>
        </NavLink>
        <span className={styles.ui}>
          <SearchBar />
        </span>
        <div className={styles.container}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={checked}
            onChange={onHandleCheck}
          />
          <div className={styles.hamburger_lines}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
          <div className={styles.menu_items} onClick={onHandleCheck}>
            <span className={styles.links} onClick={onHandleCheck}>
              <NavLink
                to="/"
                title="Navigate to Home tab"
                className={styles.link}
                end
                onClick={onHandleCheck}
              >
                Home
              </NavLink>
              <NavLink
                to="/explore"
                title="Navigate to Explore tab"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                end
                onClick={onHandleCheck}
              >
                <span>{lang.toggle ? "Esplora" : "Explore"}</span>
              </NavLink>
              <NavLink
                to="/cities"
                title="Navigate to Cities tab"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                end
                onClick={onHandleCheck}
              >
                {lang.toggle ? "Città" : "Cities"}
              </NavLink>
              <NavLink
                to="/about"
                title="Navigate to About Us tab"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                end
                onClick={onHandleCheck}
              >
                {lang.toggle ? "Chi Siamo" : "About Us"}
              </NavLink>
            </span>

            <div className={styles.userTools} onClick={onHandleCheck}>
              <span className={styles.user} onClick={onHandleCheck}>
                <UserModal
                  userLoggedIn={userLoggedIn}
                  setUserLoggedIn={setUserLoggedIn}
                />
              </span>

              <span className={styles.ui}>
                <NavLink
                  to={
                    !localStorage.getItem("username")
                      ? "/nologincart"
                      : !localStorage.getItem("cart_list") ||
                        !JSON.parse(localStorage.getItem("cart_list")).length
                      ? "/emptycart"
                      : "/cart"
                  }
                  className={styles.cart}
                  onClick={onHandleCheck}
                >
                  <AiOutlineShoppingCart />
                  <span className={styles.cart_length}>
                    {listsData.cartList.length}
                  </span>
                </NavLink>
              </span>
            </div>
            <span className={styles.utils} onClick={onHandleCheck}>
              <span
                className={styles.language}
                onClick={() => {
                  handleChangeLang();
                  onHandleCheck();
                }}
              >
                {lang.toggle ? "ITA" : "ENG"}
              </span>
              <span
                className={styles.currency}
                onClick={() => {
                  handleChangeCurr();
                  onHandleCheck();
                }}
              >
                {currency.toggle ? <AiOutlineEuro /> : <AiOutlineDollar />}
              </span>
            </span>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <UserModal
          setModalVisibility={setModalVisibility}
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
        />
      )}
    </>
  );
}
