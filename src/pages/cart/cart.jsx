import { AiFillStar } from "react-icons/ai";
import swal from "sweetalert";
import { MdWatchLater } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiRevolut } from "react-icons/si";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Cart() {
  const { lang, listsData, currency } = useSelector((state) => state);
  // const [total, setTotal] = useState(0);
  // const [formatTotal, setFormatTotal] = useState("");
  // const getTotal = (counter) => {
    
  // };
  // let counter = 0;
  // useEffect(() => {
  //   // getTotal(count);
  //   listsData.cartList.forEach((el) => (counter += el.retail_price.value));
  //   setTotal(counter);
  //   setFormatTotal(
  //     currency.toggle ? "€ " + total.toString() : "$ " + total.toString()
  //   );
  // }, [listsData, currency]);

  const dispatch = useDispatch();

  const handleDelBtn = (uuid) => {
    dispatch({ type: "DEL_CART_ITEM", payload: uuid });
    localStorage.setItem(
      "cart_list",
      JSON.stringify([...listsData.cartList.filter((el) => el.uuid !== uuid)])
    );
  };

  return listsData.cartList ? (
    <div className={styles.Main}>
      {/* <button onClick={() => console.log(listsData.cartList)}>console</button> */}
      <div className={styles.left}>
        <span className={styles.top_row}>
          <p>{lang.toggle ? "Attività" : "Activity"}</p>
          <span className={styles.pqt}>
            <p>{lang.toggle ? "Prezzo" : "Price"}</p>
            <p>{lang.toggle ? "Quantità" : "Quantity"}</p>
            <p className={styles.total}>{lang.toggle ? "Totale" : "Total"}</p>
          </span>
        </span>
        <ul className={styles.cart_list}>
          {listsData.cartList.map((el, i) => (
            <li className={styles.item} key={i}>
              <button
                className={styles.del}
                onClick={() => handleDelBtn(el.uuid)}
              >
                X
              </button>
              <img
                src={el.cover_image_url.replace("?w=540", "?w=360")}
                alt={el.slug_id}
              />
              <h4 className={styles.item_title}>{el.title}</h4>
              <p className={styles.item_price}>
              {currency.toggle ? `€ ${el.retail_price.value}` : `$ ${el.retail_price.value}`}
              </p>
              <p className={styles.quantity}>1</p>
              <p className={styles.total}>
              {currency.toggle ? `€ ${el.retail_price.value}` : `$ ${el.retail_price.value}`}
              </p>
            </li>
          ))}
        </ul>
        <span className={styles.bot_row}>
          <input
            className={styles.fake_coupon}
            placeholder={lang.toggle ? "Codice Coupon" : "Coupon Code"}
          />
          <button
            className={styles.alert_btn}
            onClick={() => {
              swal(
                "Oops",
                lang.toggle ? "Coupon non valido" : "Expired Coupon",
                "error"
              );
            }}
          >
            {lang.toggle ? "Applica il coupon" : "Apply coupon"}
          </button>
        </span>
        <div className={styles.logos}>
          <span className={styles.single_logo}>
            <AiFillStar />
            <span>
              {lang.toggle ? "Garantito al 100%" : "100% Secure check"}
            </span>
          </span>
          <span className={styles.single_logo}>
            <MdWatchLater />
            <span>
              {lang.toggle ? "Supporto clienti 24/7" : "24/7 Customer support"}
            </span>
          </span>
          <span className={styles.single_logo}>
            <FaHandHoldingUsd />
            <span>
              {lang.toggle
                ? "Rimborsi facili e veloci"
                : "Easy exchanges & refunds"}
            </span>
          </span>
        </div>
      </div>

      <div className={styles.right}>
      <div className={styles.logos}>
          <span className={styles.single_logo}>
            <AiFillStar />
            <span>
              {lang.toggle ? "Garantito al 100%" : "100% Secure check"}
            </span>
          </span>
          <span className={styles.single_logo}>
            <MdWatchLater />
            <span>
              {lang.toggle ? "Supporto clienti 24/7" : "24/7 Customer support"}
            </span>
          </span>
          <span className={styles.single_logo}>
            <FaHandHoldingUsd />
            <span>
              {lang.toggle
                ? "Rimborsi facili e veloci"
                : "Easy exchanges & refunds"}
            </span>
          </span>
        </div>
        <div className={styles.total_container}>
        <span className={styles.top_total}>
          {lang.toggle ? "Totale del carrello" : "cart total"}
        </span>
        <span className={styles.total}>
          <p className={styles.sub}>{lang.toggle ? "Subtotale" : "Subtotal"}</p>
          <p className={styles.tot}>
            {" "}
            {lang.toggle
              ? `Totale: `
              : `Total: `}{" "}
          </p>
        </span>
        <Link to="/thankyou">
          {lang.toggle ? "Procedi al checkout" : "Proceed to checkout"}
        </Link>
        <span className={styles.bank_circuits}>
          <span>
            <SiVisa />
          </span>
          <span>
            <SiMastercard />
          </span>
          <span>
            <SiPaypal />
          </span>
          <span>
            <SiRevolut />
          </span>
        </span>
        </div>
      </div>
    </div>
  ) : lang.toggle ? (
    "Carrello vuoto"
  ) : (
    "Your cart is empty"
  );
}
