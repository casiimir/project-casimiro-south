import { memo } from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  const { city, cover_image_url, reviews_avg, title, retail_price } =
    data ?? dataPlaceholder;

  const handleBuyBtn = () => {
    dispatch({ type: "SET_CART_LIST", payload: data });
    localStorage.setItem(
      "cart_list",
      JSON.stringify([...listsData.cartList, data])
    );
  };

  return (
    <>
      <div className={styles.MainCard}>
        <div className={styles.image}>
          <img
            className={styles.imagePic}
            src={cover_image_url.replace("w=540", "w=360")}
            alt="cityPic"
          />
        </div>
        <div className={styles.mapRating}>
          <div className={styles.map}>
            <FiMapPin />
            <p>{city.name}</p>
          </div>
          <div className={styles.rating}>
            {reviews_avg}
            <AiOutlineStar />
          </div>
        </div>
        <p className={styles.text}>{title.toUpperCase()}</p>
        <p className={styles.price}>{retail_price.formatted_value}</p>
        <div className={styles.buttons}>
          <button
            disabled={!localStorage.getItem("username") && true}
            onClick={handleBuyBtn}
            className={styles.mainButton}
          >
            {lang.toggle ? "Acquista" : "Buy now"}
          </button>
          <Link
            to={`/details/${data.uuid}`}
            title="Navigate to Activity Tab"
            className={styles.viewDetails}
          >
            {lang.toggle ? "Dettagli" : "View details"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainCard;