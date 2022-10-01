import TMCard from "../../components/TMCard";
import teamMembers from "./../../utils/api/teamMembers";

import styles from "./index.module.scss";

export function About() {
  return (
    <div className={styles.Main}>
      <div className={styles.description}>
        <div className={styles.rectangle}></div>
        <div className={styles.text}>
          <div className={styles.title}>
            <span>MEET </span>
            THE TEAM
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            ratione perspiciatis laboriosam eum doloremque dignissimos
            perferendis quaerat excepturi labore illo quas accusantium neque
            facilis culpa, dolorem, optio architecto quasi, ipsa aut quibusdam.
            Dolor repudiandae vel placeat debitis at reiciendis asperiores illo
            deserunt amet blanditiis dolore, odio ipsam ipsum saepe nam.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Unde ratione
            perspiciatis laboriosam eum doloremque dignissimos perferendis
            quaerat excepturi labore illo quas accusantium neque facilis culpa,
            dolorem, optio architecto quasi, ipsa aut quibusdam. Dolor
            repudiandae vel placeat debitis at reiciendis asperiores illo
            deserunt amet blanditiis dolore, odio ipsam ipsum saepe nam.
          </div>
        </div>
      </div>
      <div className={styles.teamMembers}>
        {teamMembers.map((name) => (
          <TMCard key={name.id} data={name}/>
        ))}
      </div>
    </div>
  );
}
