import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

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

  return (
    <div className={styles.Main}>
      <section className={styles.left}>
        <span className={styles.title}> Japan</span>
        <span className={styles.experience}>Unforgettable experiences</span>
        <p className={styles.description}>
          {listsData.home[descrIndex]?.meta_description}
        </p>
        <button className={styles.explore_btn}>
          <Link to="/explore" title="Navigate to Explore tab">
            explore now
          </Link>
        </button>
      </section>
      <section className={styles.right}>
        <Swiper
          style={{ borderRadius: "50px", "--swiper-pagination-color": "#fff" }}
          onSlideChange={(swiper) => setDescrIndex(swiper.activeIndex)}
          initialSlide="1"
          slidesPerView={1}
          spaceBetween={50}
          grabCursor={true}
          slidesPerGroup={1}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
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
