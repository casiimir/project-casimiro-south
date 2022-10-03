import styles from './index.module.scss';

export const Info = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.info}>
        <p className={styles.textInfo}>
          Saga-Toriimoto district is a national preservation district where you
          feel like you are stepping into the past. Your local guide will
          explain the history and culture of the area. Visit the world famous
          bamboo grove and Tenryu-ji, a UNESCO world heritage and immerse
          yourself in it's rich history. Afterwards you will enter through more
          well-known spots in Saga-Arashiyama, visiting UNESCO world heritage
          temples and the very famous bamboo grove. Indulge in an authentically
          traditional meal, and learn with your palate the rich food culture of
          Kyoto. After walking and visiting the temple, you must be ready for
          lunch! You'll have beautiful Kyoto-style lunch!
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
            <span>Good news! No extra fees are applied to this booking</span>
          </p>
        </div>
      </div>
    </div>
  );
}