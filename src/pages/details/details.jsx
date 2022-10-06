import styles from "./index.module.scss";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { useDispatch, useSelector } from "react-redux";
import MainCard from "../../components/MainCard";



export function Details() {
  const { activity_uuid } = useParams();
  const dispatch = useDispatch();
  const { listsData, lang, currency, activityData } = useSelector(
    (state) => state
  );
  const { expNew } = listsData;
  const {
    title,
    cover_image_url,
    description,
    retail_price,
    latitude,
    longitude,
  } = activityData.objectData;
  
    useLayoutEffect(() => {
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

      fetch(ENDPOINTS.NEW_ACTIVITIES, {
      method: "GET",
      headers: {
        "Accept-Language": lang.value,
        "X-Musement-Application": "string",
        "X-Musement-Version": "3.4.0",
        "X-Musement-Currency": currency.value,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({ type: "SET_NEW_LIST", payload: json }));
  }, [lang.value, currency.value]);

    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    };
    useEffect(() => {
      onTop();
    }, [routePath]);

  
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

          
          <div className={styles.tabs}>
            <NavLink
              to={`/details/${activity_uuid}/info`}
              title="Navigate to Info Tab"
              className={({ isActive }) => 
                isActive ? styles.active : styles.inactive
              }
              end
            >
              Info
            </NavLink>

            <NavLink
              to={`/details/${activity_uuid}/map`}
              title="Navigate to Map Tab"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive 
              }
              end
            >
              {lang.toggle ? "Mappa" : "Map"}
            </NavLink>
            
          </div>

          <Outlet context={[latitude, longitude]} />
        </section>

        <section className={styles.right}>
          <img
            src={cover_image_url?.replace("?w=540", "?w=1080")}
            alt={title}
          />
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
        </section>
      </div>

      {/* {lang.toggle ? (
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
      )} */}

      <div className={styles.suggestions}>
        <h3>
          {lang.toggle ? "Potrebbe piacerti anche" : "You might also like"}:
        </h3>
        <div className={styles.suggestedActivities}>
          {expNew?.slice(0, 6).map((i) => {
            return <MainCard data={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
