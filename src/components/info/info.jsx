import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/api/endpoints';
import styles from './index.module.scss';


export const Info = () => {
  const { activity_uuid } = useParams();
  const dispatch = useDispatch();
  const { lang, currency, activityData } = useSelector((state) => state);
  const {
    about,
    free_cancellation,
    duration_range,
    daily,
    languages,
    service_fee,
    description
  } = activityData.objectData;

  useEffect(() => {
    fetch(ENDPOINTS.ACTIVITY_DETAILS + activity_uuid, {
      method: "GET",
      headers: {
        "Accept-Language": lang.value,
        "X-Musement-Application": "string",
        "X-Musement-Currency": currency.value,
        "X-Musement-Market": currency.toggle ? "it" : "us",
        "X-Musement-Version": "3.4.0",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({ type: "SET_ACTIVITY_DATA", payload: json }));
  }, [lang.value, currency.value]);

  return (
    <div className={styles.Main}>
      <div className={styles.info}>
        <p className={styles.textInfo}>{about}</p>
        <div className={styles.boxInfo}>
          <div className={styles.boxInfoGrid}>
            <span className={styles.cancellation}>
              {lang.toggle
                ? free_cancellation === true
                  ? "Cancellazione gratuita"
                  : "Non è disponibile la cancellazione gratuita"
                : free_cancellation === true
                ? "Free cancellation"
                : "Free cancellation is not available"}
            </span>

            <p className={styles.duration}>
              {lang.toggle ? "Durata" : "Duration"}:
              <span>
                {" "}
                {duration_range?.max
                  ? duration_range?.max.slice(2).toLowerCase()
                  : lang.toggle
                  ? " Nessuna informazione da mostrare"
                  : " No information to show"}
              </span>
            </p>

            <p className={styles.availability}>
              {lang.toggle ? "Disponibilità" : "Availability"}:
              <span>
                {lang.toggle
                  ? daily === true
                    ? " giornaliera"
                    : " non giornaliera"
                  : daily === true
                  ? " daily"
                  : " not daily"}
              </span>
            </p>
            <p className={styles.lang}>
              {lang.toggle ? "Lingue" : "Languages"}:
              {languages?.length ? (
                languages?.map((language) => <span> {language.name};</span>)
              ) : (
                <span>
                  {lang.toggle
                    ? " Nessuna lingua da mostrare"
                    : " No languages to show"}
                </span>
              )}
            </p>
          </div>
          <p className={styles.fee}>
            {lang.toggle ? "Tassa di prenotazione" : "Booking fee"}:
            <br />
            <span>
              {service_fee?.value === 0
                ? lang.toggle
                  ? "Buone notizie! A questa prenotazione non verranno applicate tasse di prevendita"
                  : "Good news! No extra fees are applied to this booking"
                : service_fee?.formatted_value}
            </span>
          </p>

          <div className={styles.included}>
            <h3>{lang.toggle ? "Cosa è incluso" : "What's included"}</h3>
            {description ? (
              <p>{description}</p>
            ) : lang.toggle ? (
              "Nessuna informazione da mostrare"
            ) : (
              "No information to show"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}