import styles from "./index.module.scss";
import { CardList } from "../../components/CardList";

export function Explore() {
  return (
    <div className={styles.Main}>
      <span>CATEGORIA 1</span>
      <div className={styles.CategoryList}>{/* <CardList />   */}</div>
      <span>CATEGORIA 2</span>
      <div className={styles.CategoryList}>{/* <CardList />   */}</div>
      <span>CATEGORIA 3</span>
      <div className={styles.CategoryList}>{/* <CardList />   */}</div>
      <span>CATEGORIA 4</span>
      <div className={styles.CategoryList}>{/* <CardList />   */}</div>
    </div>
  );
}
