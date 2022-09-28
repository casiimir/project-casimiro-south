import styles from "./index.module.scss";
import MainCard from "../MainCard"

export const CardList = ({}) => {
  const list = [];
  for (let i = 1; i<=10; i++) {
    list.push(`https://picsum.photos/200/300?${i}`);
  }
  return (
    <div className={styles.CardList}>
      <h1 className={styles.title}>Most rated cities</h1>
      <div className={styles.wrapper}>
        {list && list.map((card) => <img  src={card} /> )}
        <MainCard />
      </div>
    </div>
  );
};

export default CardList;