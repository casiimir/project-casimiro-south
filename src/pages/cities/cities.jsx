import { ENDPOINTS } from "../../utils/api/endpoints";
import { useDispatch, useSelector } from "react-redux";

import styles from "./index.module.scss";

export function Cities() {
  const { listsData, lang, currency } = useSelector((state) => state);

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
        dispatch({ type: "CITY_ACTIVITIES_LIST", payload: json })
      );
  }, [lang.value, currency.value]);
  const { datoP1, datoP2, datoP3 } = listsData.cityAct;

  return (
    <div className={styles.Main}>
      <div className={styles.ActivityList}>
        {listsData.cityAct?.map((el, i) => (
          <MainCard data={el} />
        ))}
      </div>
    </div>
  );
}
