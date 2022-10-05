import { NavLink } from "react-router-dom";
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

export function Navbar() {
  const { lang, currency } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChangeLang = () => {
    dispatch({ type: "CHANGE_LANG" });
  };

  const handleChangeCurr = () => {
    dispatch({ type: "CHANGE_CURRENCY" });
  };

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
              <AiOutlineUser />
            </span>
            <span className={styles.cart}>
              <AiOutlineShoppingCart />
            </span>
            <span className={styles.language} onClick={handleChangeLang}>
              {lang.toggle ? "ITA" : "ENG"}
            </span>
            <span className={styles.currency} onClick={handleChangeCurr}>
              {currency.toggle ? <AiOutlineEuro /> : <AiOutlineDollar />}
            </span>
            <span className={styles.search}>
              {" "}
              <SearchBar />
            </span>
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
        </NavLink>
        <div className={styles.container}>
          <input className={styles.checkbox} type="checkbox" />
          <div className={styles.hamburger_lines}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
          <div className={styles.menu_items}>
            <NavLink
              to="/"
              title="Navigate to Home tab"
              className={styles.link}
              end
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
            <span className={styles.tools}>
              <span className={styles.language} onClick={handleChangeLang}>
                {lang.toggle ? "ITA" : "ENG"}
              </span>
              <span className={styles.currency} onClick={handleChangeCurr}>
                {currency.toggle ? <AiOutlineEuro /> : <AiOutlineDollar />}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
