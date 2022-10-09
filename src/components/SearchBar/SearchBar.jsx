import { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineClear,
} from "react-icons/ai";
import { ENDPOINTS } from "../../utils/api/endpoints";
import styles from "./index.module.scss";

export function SearchBar() {
  const { lang, currency } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [searchValue, setSearchValue] = useState(0);
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isInputActive && result) {
      setSearchValue(result.id);
      navigate("/cities");
    }
  };

  const handleOnClear = () => setInputValue("");

  const handleClose = () => {
    setIsInputActive((prev) => !prev);
    setInputValue("");
  };

  const handleCityOnClick = () => {
    if (result) {
      setSearchValue(result.id);
      navigate("/cities");
    }
  };

  useLayoutEffect(() => {
    if (inputValue.length >= 3) {
      fetch(ENDPOINTS.SEARCH_CITIES + inputValue, {
        method: "GET",
        headers: {
          "Accept-Language": "en-US",
          "X-Musement-Application": "string",
          "X-Musement-Version": "3.4.0",
        },
      })
        .then((data) => data.json())
        .then((json) => {
          json[0]?.items[0].hint === "Japan"
            ? setResult({
                title: json[0].items[0].title,
                id: json[0].items[0].id,
              })
            : setResult("");
        });
    } else {
      setResult("");
    }
  }, [inputValue]);

  useLayoutEffect(() => {
    if (searchValue !== 0) {
      fetch(`${ENDPOINTS.CITY_DATA}${searchValue}`, {
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
          setInputValue("");
          setSearchValue(0);
          setIsInputActive(false);
        });
    }
  }, [searchValue, lang.value, currency.value]);

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
