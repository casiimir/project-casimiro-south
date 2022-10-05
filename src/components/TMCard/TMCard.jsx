import { useSelector } from "react-redux";

import styles from "./index.module.scss";

const TMCard = ({ data }) => {
  const { lang } = useSelector((state) => state);
  return (
    <div className={styles.Main}>
      <div className={styles.profilepic}>
        <img
          className={styles.img}
          src={data.src}
          alt={data.name}
          onClick={() => window.open(data.linkedin, "_blank")}
        />
      </div>
      <div className={styles.member}>
        <h3>
          <span className={styles.firstName}>{data.name}</span> {data.surname}
        </h3>
        <p className={styles.position}>
          {lang.toggle ? data.descriptionIta : data.descriptionEng}
        </p>
      </div>
    </div>
  );
};

export default TMCard;
