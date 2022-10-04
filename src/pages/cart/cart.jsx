import { AiFillStar } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiRevolut } from "react-icons/si";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Cart() {
  const { listsData } = useSelector((state) => state);
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
      <button onClick={() => console.log(listsData.cartList)}>console</button>
      <div className={styles.left}>
        <span className={styles.top_row}>
          <p>Activity</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
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
                {el.retail_price.formatted_value}
              </p>
              <p className={styles.quantity}>1</p>
              <p className={styles.total}>{el.retail_price.formatted_value}</p>
            </li>
          ))}
        </ul>
        <span className={styles.bot_row}>
          <input className={styles.fake_coupon} />
          <button className={styles.alert_btn}>Apply coupon</button>
        </span>
        <span className={styles.logos}>
          <span>
            <AiFillStar />
            100% Secure Check
          </span>
          <span>
            <MdWatchLater />
            24/7 Customer support
          </span>
          <span>
            <FaHandHoldingUsd />
            Easy Exchanges & Refunds
          </span>
        </span>
      </div>

      <div className={styles.right}>
        <span className={styles.top_total}>Cart totals</span>
        <span className={styles.total}>
          <p className={styles.sub}>Subtotal </p>
          <p className={styles.tot}>Total </p>
        </span>
        <button>Proceed to checkout</button>
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
  ) : (
    "Carrello vuoto"
  );
}
