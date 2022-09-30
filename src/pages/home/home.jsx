import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

export function Home() {
  const { listsData, lang } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
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

  const [descrIndex, setDescrIndex] = useState(0);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span style="background-image: url(' + listsData.home[index]?.cover_image_url + ') !important " class="' + className + '"></span>';
    },
  };

  return (
    <div className={styles.Main}>
      <section className={styles.left}>
        <div className={styles.title_wrapper}>
          <span className={styles.title}> Japan</span>
          <span className={styles.experience}>
            {lang.toggle
              ? "Esperienze indimenticabili"
              : "Unforgettable experiences"}
          </span>
        </div>
        <div className={styles.desc_wrapper}>
          <p className={styles.description}>
            {listsData.home[descrIndex]?.meta_description}
          </p>
          <button className={styles.explore_btn}>
            <Link to="/explore" title="Navigate to Explore tab">
              {lang.toggle ? "Esplora ora" : "explore now"}
            </Link>
          </button>
        </div>
      </section>
      <section className={styles.right}>
        <Swiper
          onSlideChange={(swiper) => setDescrIndex(swiper.activeIndex)}
          initialSlide={0}
          slidesPerView={1}
          spaceBetween={50}
          grabCursor={true}
          slidesPerGroup={1}
          pagination={pagination}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {listsData.home?.map((el, i) => (
            <SwiperSlide key={i}>
              <div className={styles.carousel}>
                <img src={el.cover_image_url} alt={el.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
