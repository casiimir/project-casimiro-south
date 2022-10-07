import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styles from "./index.module.scss";

const ScrollButton = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.Main}>
      <BsFillArrowUpCircleFill
        onClick={scrollToTop}
      />
      </div>
  );
};

export default ScrollButton;
