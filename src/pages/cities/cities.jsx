import { CardList } from "../../components/CardList";
import styles from "./index.module.scss";

export function Cities() {
  return (
    <div
      className={styles.Main}
      style={{
        backgroundImage: `url('https://picsum.photos/1920/400')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.CardList}>
        <CardList />
      </div>
    </div>
  );
}

