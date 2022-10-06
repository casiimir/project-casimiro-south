import { useState, useEffect, useLayoutEffect } from "react";
import { ENDPOINTS } from "../../utils/api/endpoints";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineClear,
} from "react-icons/ai";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { lang, currency } = useSelector((state) => state);
  const dispatch = useDispatch;
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [searchValue, setSearchValue] = useState(0);
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isInputActive) {
      setSearchValue(result.id);
    }
  };

  const handleOnClear = () => setInputValue("");

  const handleClose = () => {
    setIsInputActive((prev) => !prev);
    setInputValue("");
  };

  const handleCityOnClick = () => {
    setSearchValue(result.id);
  };

  useLayoutEffect(() => {
    if (inputValue.length >= 3) {
      fetch(ENDPOINTS.SEARCH_CITIES + inputValue, {
        method: "GET",
        headers: {
          "X-Musement-Application": "string",
          "X-Musement-Version": "3.4.0",
        },
      })
        .then((data) => data.json())
        .then((json) => {
          setResult({
            title: json[0]?.items[0]?.title,
            id: json[0]?.items[0]?.id,
          });
        });
    } else {
      setResult("");
    }
  }, [inputValue]);

  useEffect(() => {
    if (searchValue !== 0) {
      fetch(`${ENDPOINTS.CITY_DATA}${searchValue}`, {
        method: "GET",
        headers: {
          "Accept-Language": lang.value,
          "X-Musement-Application": "string",
          "X-Musement-Market": currency.toggle ? "eu" : "us",
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
              content: json.content,
              headline: json.headline,
              cover_img: json.cover_image_url,
            },
          });
          console.log(json);
          navigate("/cities");
          setInputValue("");
          setIsInputActive(false);
        });
    }
  }, [searchValue]);

  const handleOnChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <form className={styles.Main} onSubmit={(e) => handleOnSubmit(e)}>
        <span className={styles.input_container}>
          <input
            className={`${styles.input} ${isInputActive && styles.active}`}
            value={inputValue}
            onChange={(e) => handleOnChange(e)}
          />
          {isInputActive && (
            <span className={styles.clear} onClick={handleOnClear}>
              <AiOutlineClear />
            </span>
          )}
        </span>
        <span className={styles.close_input} onClick={handleClose}>
          {isInputActive ? <AiOutlineClose /> : <AiOutlineSearch />}
        </span>
      </form>
      {inputValue && (
        <ul className={styles.modal_res}>
          <li className={styles.res} onClick={handleCityOnClick}>
            {result.title ?? (lang.toggle ? "Nessun risultato" : "No results")}
          </li>
        </ul>
      )}
    </>
  );
}
