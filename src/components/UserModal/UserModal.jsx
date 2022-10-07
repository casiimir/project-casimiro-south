import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import styles from "./index.module.scss";

const UserModal = (props) => {
  const { lang } = useSelector((state) => state);

  const removeUsername = () => {
    localStorage.removeItem("username");
    props.setUserLoggedIn("");
    props.setModalVisibility && props.setModalVisibility(false);
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
        <button
          onClick={() =>
            props.setModalVisibility && props.setModalVisibility(false)
          }
        >
          <Link to="/login" title="Navigate to Login page">
            {lang.toggle ? "Accedi" : "Sign In"}
          </Link>
        </button>
      )}
      <div className={styles.close}>
        <RiCloseCircleLine onClick={() => props.setModalVisibility(false)} />
      </div>
    </div>
  );
};

export default UserModal;
