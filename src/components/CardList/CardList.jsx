import styles from "./index.module.scss";
import MainCard from "../MainCard";

export const CardList = ({}) => {
  const list = [];
  for (let i = 1; i <= 20; i++) {
    list.push(`https://picsum.photos/200/300?${i}`);
  }
  return (
    <div className={styles.Main}>
      <div className={styles.wrapper}>
        {list && list.map((card) => <img src={card} />)}
      </div>
    </div>
  );
};

export default CardList;
