import { useSelector } from "react-redux";


import styles from "./index.module.scss";

const TMCard = ({ data }) => {
  const { lang } = useSelector((state) => state);
  return (
    <div className={styles.Main}>
      <img
        className={styles.img}
        src={data.src}
        alt={data.name}
        onClick={() => window.open(data.linkedin, "_blank")}
      />
      
      <h3>
        <span className={styles.firstName}>{data.name}</span> {data.surname}
      </h3>
      <p className={styles.description}>{lang.toggle ? data.descriptionIta : data.descriptionEng}</p> 
    </div>
  );
};

export default TMCard;
