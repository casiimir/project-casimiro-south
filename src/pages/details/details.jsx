import styles from "./index.module.scss";
import { CardList } from "../../components/CardList";
import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { useDispatch, useSelector } from "react-redux";


export function Details() {
  const { activity_uuid } = useParams();
  const dispatch = useDispatch();
  const { lang, currency, activityData } = useSelector((state) => state);
  const {
    title,
    cover_image_url,
    description,
    retail_price,
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
      .then((json) =>
        dispatch({ type: "SET_ACTIVITY_DATA", payload: json })
      );
  }, [lang.value, currency.value]);


  
  const [isInfoVisible, setInfoVisible] = useState(true);
  const [isMapVisible, setMapVisible] = useState(false);

  const infoOnClick = () => {
    setInfoVisible(!isInfoVisible);
    setMapVisible(!isMapVisible);
  };

  const mapOnClick = () => {
    setMapVisible(!isMapVisible);
    setInfoVisible(!isInfoVisible);
  };
  
  return (
    <div className={styles.Main}>
      <div className={styles.content}>
        <section className={styles.left}>
          <div className={styles.titlePrice}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.priceInfo}>
              <p className={styles.price}>
                {lang.toggle ? "da" : "from"}:
                <span> {retail_price?.formatted_value}</span>
              </p>
            </div>
          </div>

          {/* <button onClick={() => console.log(activityData.objectData)}>
            Console
          </button> */}

          <div className={styles.tabs}>
            <Link
              to={`/details/${activity_uuid}/info`}
              title="Navigate to Info Tab"
              onClick={() => infoOnClick()}
              className={`${isInfoVisible ? styles.active : styles.inactive}`}
            >
              Info
            </Link>

            <Link
              to={`/details/${activity_uuid}/map`}
              title="Navigate to Map Tab"
              onClick={() => mapOnClick()}
              className={`${isMapVisible ? styles.active : styles.inactive}`}
            >
              {lang.toggle ? "Mappa" : "Map"}
            </Link>
            {/* {console.log(isInfoVisible)}
            {console.log(isMapVisible)} */}
          </div>

          <Outlet />
        </section>

        <section className={styles.right}>
          <img src={cover_image_url} alt={title} />
          <div className={styles.included}>
            <h3>{lang.toggle ? "Cosa è incluso" : "What's included"}</h3>
            <p>{description}</p>
          </div>
        </section>
      </div>

      {lang.toggle ? (
        <div className={styles.date}>
          <h3>Disponibilità e prezzi</h3>
          <p>Seleziona una data per vedere i biglietti disponibili</p>
          <div className={styles.datePicker}>
            <input type="date" name="date"></input>
            <button>Verifica disponibilità</button>
          </div>
        </div>
      ) : (
        <div className={styles.date}>
          <h3>Availability and prices</h3>
          <p>Select a date to see the tickets available</p>
          <div className={styles.datePicker}>
            <input type="date" name="date"></input>
            <button>Check availability</button>
          </div>
        </div>
      )}

      <div className={styles.suggestions}>
        <h3>{lang.toggle ? "Potrebbe piacerti anche" : "You might also like"}:</h3>
        <CardList />
      </div>
    </div>
  );
}
