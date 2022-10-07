import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import styles from "./index.module.scss";

export const UserModal = (props) => {
  const { lang } = useSelector((state) => state);
  const location = useLocation();
  const navigate = useNavigate();

  const removeUsername = () => {
    localStorage.removeItem("username");
    props.setUserLoggedIn("");
    props.setModalVisibility && props.setModalVisibility(false);
    console.log(location);
    if (location.pathname === "/cart" || location.pathname === "/emptycart")
      navigate("/nologincart");
  };

  return (
    <div className={styles.Main}>
      {props.userLoggedIn ? (
        <div className={styles.signout}>
          <p>Hi, {props.userLoggedIn}</p>
          <button onClick={removeUsername}>
            {lang.toggle ? "Esci" : "Sign Out"}
          </button>
        </div>
      ) : (
        <Link
          onClick={() =>
            props.setModalVisibility && props.setModalVisibility(false)
          }
          to="/login"
          title="Navigate to Login page"
          state={{ prev: location.pathname }}
        >
          {lang.toggle ? "Accedi" : "Sign In"}
        </Link>
      )}
      <div className={styles.close}>
        <RiCloseCircleLine onClick={() => props.setModalVisibility(false)} />
      </div>
    </div>
  );
};

export default UserModal;
