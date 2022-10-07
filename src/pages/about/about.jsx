import { useSelector } from "react-redux";
import { TMCard } from "../../components/TMCard";
import teamMembers from "./../../utils/api/teamMembers";

import styles from "./index.module.scss";

export function About() {
  const { lang } = useSelector((state) => state);
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
              <h5>
                {lang.toggle ? "Come tutto è cominciato" : "How It All Started"}
              </h5>
              <p>
                {lang.toggle
                  ? "Project South inc. è stata fondata nel 2022 da Casimiro Ciancimino, un FrontEnd Developer con una grande idea: selezionare 6 Frontenders siciliani e far realizzare loro un grande progetto."
                  : "Project South inc. was founded in 2022 by Casimiro Ciancimino, a FrontEnd Developer with one big idea: select 6 sicilian frontenders and let them realize a big project."}
              </p>
            </div>
            <div className={styles.section}>
              <h5>{lang.toggle ? "Il Team" : "The Team"}</h5>
              <p>
                {lang.toggle
                  ? 'Siamo Antonino, Domenico, Roberta, Lucia, Ginevra e Dalila. Abbiamo inventato, studiato, progettato e realizzato "Japventure": una piattaforma intuitiva, dove i giramondo possono scoprire il Giappone e le sue bellezze.'
                  : 'We are Antonino, Domenico, Roberta, Lucia, Ginevra and Dalila. We invented, studied, designed and realized "Japventure" : an intuitive platform, where globetrotters can discover Japan and its amenities.'}
              </p>
            </div>
            <div className={styles.section}>
              <h5>{lang.toggle ? "Valori Fondamentali" : "Core Values"}</h5>
              <p>
                {lang.toggle
                  ? "Viviamo secondo i nostri valori fondamentali. Ecco perché crediamo nel lavorare insieme, nell'essere positivi e nell'ispirarci a vicenda. Perché abbiamo successo solo quando tutto il nostro team ha successo."
                  : "We live by our core values. That’s why we believe in working together, being positive, and inspiring each other. Because we only succeed when our whole team does."}
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
      <p className={styles.thanks}>Made with ❤️&🐟</p>
    </div>
  );
}
