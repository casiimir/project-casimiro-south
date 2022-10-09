import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { MainCard } from "../../components/MainCard";
import { CardList } from "../../components/CardList";
import styles from "./index.module.scss";

export function Cities() {
  const { listsData, lang, currency, cityData } = useSelector((state) => state);
  const { id, name, meta, headline, cover_img } = cityData.objectData;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useLayoutEffect(() => {
    fetch(ENDPOINTS.CITIES, {
      method: "GET",
      headers: {
        "Accept-Language": lang.value,
        "X-Musement-Application": "string",
        "X-Musement-Version": "3.4.0",
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_HOME_LIST", payload: data }));
  }, [lang.value]);

  const options = listsData.home.map((el) => ({
    value: el.id,
    text: el.name,
  }));

  const [selected, setSelected] = useState(id);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  useLayoutEffect(() => {
    fetch(`${ENDPOINTS.CITY_DATA}${selected}`, {
      method: "GET",
      headers: {
        "Accept-Language": lang.value,
        "X-Musement-Application": "string",
        "X-Musement-Market": currency.toggle ? "it" : "us",
        "X-Musement-Version": "3.4.0",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        dispatch({
          type: "SET_CITY_DATA",
          payload: {
            id: json.id,
            name: json.name,
            meta: json.meta_description,
            headline: json.headline,
            cover_img: json.cover_image_url,
          },
        });
      });
  }, [selected, lang.value, currency.toggle]);

  useLayoutEffect(() => {
    fetch(
      `https://api.musement.com/api/v3/cities/${id}/activities?limit=100&offset=0`,
      {
        method: "GET",
        headers: {
          "Accept-Language": lang.value,
          "X-Musement-Application": "string",
          "X-Musement-Version": "3.4.0",
          "X-Musement-Currency": currency.value,
        },
      }
    )
      .then((response) => response.json())
      .then((json) =>
        dispatch({ type: "CITY_ACTIVITIES_LIST", payload: json })
      );
  }, [id, lang.value, currency.value]);

  return (
    <div
      className={styles.Main}
      style={{
        backgroundImage: `url(${cover_img}?h=600)`,
        objectFit: "cover",

        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.hero}>
        <div className={styles.hero_right}>
          <h2 className={styles.headline}>
            {headline
              ? headline.replace(name, "")
              : lang.toggle
              ? "Benvenuti a"
              : "Welcome to"}
          </h2>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.meta}>{meta}</p>
        </div>
        <div className={styles.hero_left}>
          <div className={styles.select_dropdown}>
            <select value={selected} onChange={handleChange}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <CardList>
        {listsData.cityAct?.map((el, i) => (
          <MainCard data={el} key={i} />
        ))}
      </CardList>
    </div>
  );
}
