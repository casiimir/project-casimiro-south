import { useState, useRef, useEffect } from "react";
import { ENDPOINTS } from "../../utils/api/endpoints";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import styles from "./index.module.scss";

export default function SearchBar() {
  //const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isInputActive) {
      //setSearchValue(resultsList[0].id);
      setInputValue("");
      //setIsInputActive(false);
    }
  };

  const handleOnClear = () => setInputValue("");

  const handleClose = () => {
    setIsInputActive((prev) => !prev);
    setInputValue("");
  };

  const handleTitleOnClick = (id) => {
    //setSearchValue(id);
    setInputValue("");
    setIsInputActive(false);
  };

  //const handleInputRef = () => {
  //inputRef.current.focus();
  //}, [isInputActive, inputValue];

  useEffect(() => {
    if (inputValue.length >= 3) {
      fetch(ENDPOINTS.SEARCH_CITIES + inputValue, {
        method: "GET",
        headers: {
          "X-Musement-Application": "string",
          "X-Musement-Version": "3.4.0",
        },
      })
        .then(
          (data) => data.json()
          //console.log(data);
          //setResultsList(data.results);
        )
        .then((json) => setResult(json[0]?.items[0]?.title));
    }
  }, [inputValue]);

  useEffect(() => {}, []);

  const handleOnChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <form className={styles.Main} onSubmit={(e) => handleOnSubmit(e)}>
        <input
          ref={inputRef}
          className={`${styles.input} ${isInputActive && styles.active}`}
          value={inputValue}
          onChange={(e) => handleOnChange(e)}
        />
        {isInputActive && (
          <span className={styles.button} onClick={handleOnClear}>
            <AiOutlineCloseCircle />
          </span>
        )}
        <span className={styles.close_input} onClick={handleClose}>
          {isInputActive ? <AiOutlineClose /> : <AiOutlineSearch />}
        </span>
      </form>
      {inputValue && <ul className={styles.list}>{result ?? "no result"}</ul>}
    </>
  );
}
