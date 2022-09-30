import styles from "./index.module.scss";
import { CardList } from "../../components/CardList";

export function Details() {
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

          <div className={styles.buttons}>
            <button className={styles.active}>info</button>
            <button className={styles.inactive}>map</button>
          </div>

          <div className={styles.info}>
            <p className={styles.textInfo}>
              Saga-Toriimoto district is a national preservation district where
              you feel like you are stepping into the past. Your local guide
              will explain the history and culture of the area. Visit the world
              famous bamboo grove and Tenryu-ji, a UNESCO world heritage and
              immerse yourself in it's rich history. Afterwards you will enter
              through more well-known spots in Saga-Arashiyama, visiting UNESCO
              world heritage temples and the very famous bamboo grove. Indulge
              in an authentically traditional meal, and learn with your palate
              the rich food culture of Kyoto. After walking and visiting the
              temple, you must be ready for lunch! You'll have beautiful
              Kyoto-style lunch!
            </p>
            <div className={styles.boxInfo}>
              <div className={styles.boxInfoGrid}>
                <span className={styles.cancellation}>Free cancellation</span>
                <p className={styles.duration}>
                  Duration: <span>4 hours</span>
                </p>
                <p className={styles.availability}>
                  Availability: <span>daily</span>
                </p>
                <p className={styles.lang}>
                  Language: <span>English, Japanese</span>
                </p>
              </div>
              <p className={styles.fee}>
                Booking fee:
                <br />
                <span>
                  Good news! No extra fees are applied to this booking
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.right}>
          <img src="https://picsum.photos/600/300" alt="image" />
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
