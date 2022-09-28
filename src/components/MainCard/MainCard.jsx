import { memo } from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

import styles from "./index.module.scss";

const MainCard = () => {
  return (
    <>
      <div className={styles.MainCard}>
        <div className={styles.image}>
          <img
            className={styles.imagePic}
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/477000/477571-Osaka.jpg"
            alt="cityPic"
          />
        </div>
        <div className={styles.mapRating}>
          <div className={styles.map}>
            <FiMapPin />
            <p>CITYNAME</p>
          </div>
          <AiOutlineStar />
        </div>
        <p className={styles.text}>ACTIVITY TITLE</p>
        <div className={styles.buttons}>
          <button className={styles.mainButton}> book now </button>
          <p className={styles.viewDetails}> view details </p>
        </div>
      </div>
    </>
  );
};

export default memo(MainCard);
