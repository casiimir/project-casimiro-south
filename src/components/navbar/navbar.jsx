import { NavLink } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineEuro,
  AiOutlineDollar,
  AiOutlineMenu,
} from "react-icons/ai";
import Logo from "../../utils/images/logos/japventure-logo-32.svg";
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
      <nav className={styles.Main}>
        <NavLink
          to="/"
          title="Navigate to Explore tab"
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
            Explore
          </NavLink>
          <NavLink
            to="/deals"
            title="Navigate to Special Deals tab"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            end
          >
            Special Deals
          </NavLink>
          <NavLink
            to="/about"
            title="Navigate to About Us tab"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            end
          >
            About Us
          </NavLink>
        </span>
        <span className={styles.tools}>
          <span className={styles.ui}>
            <AiOutlineSearch />
            <AiOutlineUser />
            <AiOutlineShoppingCart />
          </span>
          <span className={styles.language} onClick={handleChangeLang}>
            {lang.toggle ? "ITA" : "ENG"}
          </span>
          <span className={styles.currency} onClick={handleChangeCurr}>
            {currency.toggle ? <AiOutlineEuro /> : <AiOutlineDollar />}
          </span>
        </span>
      </nav>
    </>
  );
}
