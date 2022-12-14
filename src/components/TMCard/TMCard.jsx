import styles from "./index.module.scss";

export const TMCard = ({ data }) => {
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
      </div>
    </div>
  );
};

export default TMCard;
