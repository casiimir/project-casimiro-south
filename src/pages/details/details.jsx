import styles from "./index.module.scss";
import { CardList } from "../../components/CardList";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export function Details() {
  const [isInfoVisible, setInfoVisible] = useState(true);
  const [isMapVisible, setMapVisible] = useState(false);

  const infoOnClick = () => {
    setInfoVisible(!isInfoVisible);
    setMapVisible(!isMapVisible);
  };

  const mapOnClick = () => {
    setMapVisible(!isMapVisible);
    setInfoVisible(!isInfoVisible);
  };


  return (
    <div className={styles.Main}>
      <div className={styles.content}>
        <section className={styles.left}>
          <div className={styles.titlePrice}>
            <h1 className={styles.title}>
              Kyoto Arashiyama insider walking tour
            </h1>
            <div className={styles.priceInfo}>
              <p className={styles.price}>
                from: <span> €66.35</span>
              </p>
            </div>
          </div>

          <div className={styles.tabs}>
            <Link
              to="/details/info"
              title="Navigate to Info Tab"
              onClick={() => infoOnClick()}
              className={`${isInfoVisible ? styles.active : styles.inactive}`}
            >
              Info
            </Link>
            
            <Link
              to="/details/map"
              title="Navigate to Map Tab"
              onClick={() => mapOnClick()}
              className={`${isMapVisible ? styles.active : styles.inactive}`}
            >
              Map
            </Link>
            {console.log(isInfoVisible)}
            {console.log(isMapVisible)}
            
          </div>

          <Outlet />

        </section>

        <section className={styles.right}>
          <img src="https://picsum.photos/600/300" alt="activity-details" />
          <div className={styles.included}>
            <h3>What's included</h3>
            <p>
              Entrance fees to all temples Authentic Kyoto-Style lunch Local
              guide Tour photo
            </p>
          </div>
        </section>
      </div>

      <div className={styles.date}>
        <h3>Availability and prices</h3>
        <p>Select a date to see the tickets available</p>
        <div className={styles.datePicker}>
          <input type="date" name="date"></input>
          <button>Check availability</button>
        </div>
      </div>

      <div className={styles.suggestions}>
        <h3>You might also like</h3>
        <CardList />
      </div>
    </div>
  );
}
