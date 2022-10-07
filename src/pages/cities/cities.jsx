import { ENDPOINTS } from "../../utils/api/endpoints";
import { useDispatch, useSelector } from "react-redux";
import MainCard from "../../components/MainCard";
import { CardList } from "../../components/CardList";
import styles from "./index.module.scss";
import { useEffect } from "react";

export function Cities() {
  const { listsData, lang, currency, cityData } = useSelector((state) => state);
  const { id, name, content, headline, cover_img } = cityData.objectData;

  const dispatch = useDispatch();
  useEffect(() => {
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
  const { datoP1, datoP2, datoP3 } = listsData.cityAct;

  return (
    <div
      className={styles.Main}
      style={{
        backgroundImage: `url(${cover_img}?w=1920)`,
        objectFit: "cover",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        // backdropFilter: "blur(500px)",
      }}
    >
      <div className={styles.hero}>
        <div className={styles.hero_right}>
          <h2 className={styles.headline}>{headline.replace(name, "")}</h2>
          <h1 className={styles.name}>{name}</h1>
        </div>
        <div className={styles.hero.left}>form placeholder</div>
      </div>
      <button onClick={() => console.log(cityData)}>console</button>
      <CardList>
        {listsData.cityAct?.map((el, i) => (
          <MainCard data={el} key={i} />
        ))}
      </CardList>
    </div>
  );
}
