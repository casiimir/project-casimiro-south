import styles from "./index.module.scss";

export const Particles = () => {
  return (
    <div className={styles.wrap}>
      {Array.apply(null, Array(250)).map(function (_, i) {
        return (
          <div key={i} className={styles.p}>
            <div className={styles.q}></div>
          </div>
        );
      }, this)}
    </div>
  );
};
