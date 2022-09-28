import styles from "./index.module.scss";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { CardList } from "../../components/CardList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Explore() {
  const { listsData, lang, currency } = useSelector((state) => state);
  const { expCity, expFD, expFolk, expNew } = listsData;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(ENDPOINTS.CITY_ACTIVITIES, {
      method: "GET",
      headers: {
        "Accept-Language": lang.value,
        "X-Musement-Application": "string",
        "X-Musement-Version": "3.4.0",
        "X-Musement-Currency": currency.value,
      },
    })
      .then((response) => response.json())
      .then((json) =>
        dispatch({ type: "SET_EXP_CITY_LIST", payload: json.data })
      );

    fetch(ENDPOINTS.FOLKLORE_ACTIVITIES, {
      method: "GET",
      headers: {
        "Accept-Language": lang.value,
        "X-Musement-Application": "string",
        "X-Musement-Version": "3.4.0",
        "X-Musement-Currency": currency.value,
      },
    })
      .then((response) => response.json())
      .then((json) =>
        dispatch({ type: "SET_EXP_FD_LIST", payload: json.data })
      );
    fetch(ENDPOINTS.FOOD_DRINK_ACTIVITIES, {
      method: "GET",
      headers: {
        "Accept-Language": lang.value,
        "X-Musement-Application": "string",
        "X-Musement-Version": "3.4.0",
        "X-Musement-Currency": currency.value,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({ type: "SET_FOLK_LIST", payload: json.data }));

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

  return (
    <div className={styles.Main}>
      <span>CITY EXPERIENCES</span>
      <div className={styles.CategoryList}>{/* <CardList />   */}</div>
      <button onClick={() => console.log(expCity)}>Console City</button>
      <span>FOOD&DRINKS</span>
      <div className={styles.CategoryList}>{/* <CardList />   */}</div>
      <button onClick={() => console.log(expFD)}>Console Food&Drinks</button>
      <span>FOLKLORE</span>
      <div className={styles.CategoryList}>{/* <CardList />   */}</div>
      <button onClick={() => console.log(expFolk)}>Console Folklore</button>
      <span>MUST DO</span>
      <div className={styles.CategoryList}>{/* <CardList />   */}</div>
      <button onClick={() => console.log(expNew)}>Console New</button>
    </div>
  );
}
