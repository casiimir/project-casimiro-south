import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { MainCard } from "../../components/MainCard";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";
import styles from "./index.module.scss";

export function Explore() {
  const { listsData, lang, currency } = useSelector((state) => state);
  const { expCity, expFD, expFolk, expNew } = listsData;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
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
      <span className={styles.titles}> CITY EXPERIENCES </span>
      <div className={styles.CategoryList}>
        <Swiper
          className={styles.mySwiper}
          slidesPerView={"auto"}
          spaceBetween={20}
          grabCursor={true}
          modules={[Scrollbar, FreeMode]}
          scrollbar={{ draggable: true }}
          freeMode={true}
        >
          {expCity?.map((el, i) => (
            <SwiperSlide style={{ width: "auto", height: "auto" }} key={i}>
              <MainCard data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span className={styles.titles}>FOOD&DRINKS</span>
      <div className={styles.CategoryList}>
        <Swiper
          className={styles.mySwiper}
          slidesPerView={"auto"}
          spaceBetween={20}
          grabCursor={true}
          modules={[Scrollbar, FreeMode]}
          scrollbar={{ draggable: true }}
          freeMode={true}
        >
          {expFD?.map((el, i) => (
            <SwiperSlide style={{ width: "auto", height: "auto" }} key={i}>
              <MainCard data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span className={styles.titles}> FOLKLORE </span>
      <div className={styles.CategoryList}>
        <Swiper
          className={styles.mySwiper}
          slidesPerView={"auto"}
          spaceBetween={20}
          grabCursor={true}
          modules={[Scrollbar, FreeMode]}
          scrollbar={{ draggable: true }}
          freeMode={true}
        >
          {expFolk?.map((el, i) => (
            <SwiperSlide style={{ width: "auto", height: "auto" }} key={i}>
              <MainCard data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span className={styles.titles}> MUST DO </span>
      <div className={styles.CategoryList}>
        <Swiper
          className={styles.mySwiper}
          slidesPerView={"auto"}
          spaceBetween={20}
          grabCursor={true}
          modules={[Scrollbar, FreeMode]}
          scrollbar={{ draggable: true }}
          freeMode={true}
        >
          {expNew?.map((el, i) => (
            <SwiperSlide style={{ width: "auto", height: "auto" }} key={i}>
              <MainCard data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
