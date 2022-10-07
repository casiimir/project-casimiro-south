import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { MainCard } from "../../components/MainCard";
import {ScrollButton} from "../../components/scrollButton";
import { BsArrowLeftCircle } from "react-icons/bs";
import swal from "sweetalert";
import styles from "./index.module.scss";

export function Details() {
  const { activity_uuid } = useParams();
  const { listsData, lang, currency, activityData } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
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
      .then((json) => dispatch({ type: "SET_ACTIVITY_DATA", payload: json }));

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
  useLayoutEffect(() => {
    onTop();
  }, [routePath]);

  const handleBuyBtn = () => {
    localStorage.getItem("username") &&
      dispatch({ type: "SET_CART_LIST", payload: activityData.objectData });
    localStorage.setItem(
      "cart_list",
      JSON.stringify([...listsData.cartList, activityData.objectData])
    );
    localStorage.getItem("username")
      ? swal(
          "Well Done",
          lang.toggle
            ? "Hai aggiunto un'attività al carrello"
            : "Activity Added to Cart",
          "success"
        )
      : swal(
          "Oops",
          lang.toggle
            ? "Sembra che tu non sia loggato!"
            : "Seems like you're not logged in",
          "error"
        );
  };

  return (
    <div className={styles.Main}>
      <div className={styles.content}>
        <section className={styles.left}>
          <Link className={styles.back} to={routePath.state.prev.pathname}>
            <BsArrowLeftCircle />
          </Link>
          <div className={styles.titlePrice}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.priceInfo}>
              <p className={styles.price}>
                {lang.toggle ? "da" : "from"}:
                <span> {retail_price?.formatted_value}</span>
              </p>
              <div className={styles.buttons}>
                <button onClick={handleBuyBtn} className={styles.mainButton}>
                  {lang.toggle ? "Aggiungi al carrello" : "Add to cart"}
                </button>
              </div>
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
          <img src={cover_image_url?.replace("?w=540", "?h=600")} alt={title} />

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

      <div className={styles.suggestions}>
        <h3>
          {lang.toggle ? "Potrebbe piacerti anche" : "You might also like"}:
        </h3>
        <div className={styles.suggestedActivities}>
          {expNew?.slice(0, 6).map((el, i) => {
            return <MainCard data={el} key={i} />;
          })}
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}
