import { memo } from "react";

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
          <p className={styles.imageTitle}>CITY</p>
        </div>
        <div className={styles.mapRating}>
          <div className={styles.map}>
            <p>🗺️</p>
            <p>map</p>
          </div>
          <div className={styles.stars}>⭐⭐</div>
        </div>
        <p className={styles.text}>
          {" "}
          CITY text: : Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Accusantium, cupiditate. Eligendi fugit dolor animi laborum?{" "}
        </p>
        <div className={styles.buttons}>
          <button className={styles.mainButton}> book now </button>
          <p className={styles.viewDetails}> view details </p>
        </div>
      </div>
    </>
  );
};

export default memo(MainCard);
