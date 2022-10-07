import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import styles from "./index.module.scss";

const MainCard = ({ data }) => {
  const { lang, listsData } = useSelector((state) => state);
  const dispatch = useDispatch();

  const dataPlaceholder = {
    city: { name: "" },
    cover_image_url: "",
    reviews_avg: 0,
    title: "",
    retail_price: { formatted_value: "" },
  };
  const { city, cover_image_url, title, retail_price } =
    data ?? dataPlaceholder;

  const handleBuyBtn = () => {
    localStorage.getItem("username")  && dispatch({ type: "SET_CART_LIST", payload: data });
    localStorage.setItem(
      "cart_list",
      JSON.stringify([...listsData.cartList, data])
    );
    localStorage.getItem("username") ? swal(
      "Well Done",
      lang.toggle ? "Hai aggiunto un'attività al carrello" : "Activity Added to Cart",
      "success"
    ):swal(
      "Oops",
      lang.toggle ? "Sembra che tu non sia loggato!" : "Seems like you're not logged in",
      "error"
    );
  };

  return (
    <>
      <div className={styles.MainCard}>
        <Link
            to={`/details/${data.uuid}`}
            title="Navigate to Activity Tab"
            className={styles.viewDetails}
          >
        <div className={styles.image}>
          <img
            className={styles.imagePic}
            src={cover_image_url.replace("w=540", "w=360")}
            alt="cityPic"
          />
        </div>
        <div className={styles.placePrice}>
          <div className={styles.place}>
            <FiMapPin />
            <p>{city.name.toUpperCase()}</p>
          </div>
          <div className={styles.price}>
          <p className={styles.price}>{retail_price.formatted_value}</p>
          </div>
        </div>
        <p className={styles.expTitle}>{title.toUpperCase()}</p>
          </Link>
        <div className={styles.buttons}>
          <button
            onClick={handleBuyBtn}
            className={styles.mainButton}
          >
            {lang.toggle ? "Aggiungi al carrello" : "Add to cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainCard;