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
            <p>
              <span>WE ARE </span> JAPVENTURE
            </p>
          </div>
          <div className={styles.weAreSection}>
            <div className={styles.section}>
              <h5>How It All Started</h5>
              <p>
                Project South inc. was founded in 2022 by Casimiro Ciancimino, a
                FrontEnd Developer with one big idea: select 6 sicilian
                frontenders and let them realize a big project.
              </p>
            </div>
            <div className={styles.section}>
              <h5>The Team</h5>
              <p>
                We are Antonino, Domenico, Roberta, Lucia, Ginevra and Dalila.
                We invented, studied, designed and realized "Japventure" : an
                intuitive platform, where globetrotters can discover Japan and
                its amenities.
              </p>
            </div>
            <div className={styles.section}>
              <h5>Core Values</h5>
              <p>
                "We live by our core values. That’s why we believe in working
                together, bee-ing positive, and inspiring each other. Because we
                only succeed when our whole team does."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.teamMembers}>
        {teamMembers.map((name) => (
          <TMCard key={name.id} data={name} />
        ))}
      </div>
    </div>
  );
}
