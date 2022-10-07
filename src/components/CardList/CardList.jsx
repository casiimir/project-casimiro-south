import styles from "./index.module.scss";

export const CardList = ({ children }) => {
  return (
    <div className={styles.Main}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default CardList;
