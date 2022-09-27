import { NavLink } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineEuro,
  AiOutlineDollar,
} from "react-icons/ai";
import Logo from "../../utils/images/logos/japventure-logo-32.svg";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";

export function Navbar() {
  const { lang, currency } = useSelector((state) => state);
  return (
    <>
      <nav className={styles.Main}>
        <img src={Logo} className={styles.logo} />
        <ul className={styles.links}>
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
        </ul>
        <ul className={styles.tools}>
          <AiOutlineSearch />
          <AiOutlineUser />
          <AiOutlineShoppingCart />
          <span className={styles.language}>{lang.toggle ? "ITA" : "ENG"}</span>
          {currency.toggle ? <AiOutlineEuro /> : <AiOutlineDollar />}
        </ul>
      </nav>
      <hr />
    </>
  );
}
