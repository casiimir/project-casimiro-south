import { memo } from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

import styles from "./index.module.scss";

const MainCard = ({ data }) => {
  const dataPlaceholder = {
    city: { name: "" },
    cover_image_url: "",
    reviews_avg: 0,
    title: "",
    retail_price: { formatted_value: "" },
  };
  //   city.name
  // cover_image_url
  // title
  // retail_price.formatted_value
  const { city, cover_image_url, reviews_avg, title, retail_price } =
    data ?? dataPlaceholder;

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
          <button className={styles.mainButton}> book now </button>
          <p className={styles.viewDetails}> view details </p>
        </div>
      </div>
    </>
  );
};

export default memo(MainCard);
