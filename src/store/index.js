import { combineReducers, createStore } from "redux";

const init = {
  lang: { toggle: false, value: "en-US" },
  currency: { toggle: false, value: "USD" },
  listsData: { home: [], expCity: [], expFD: [], expFolk: [], expNew: [] },
};

function langReducer(state = {}, action) {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        toggle: !state.toggle,
        value: !state.toggle ? "it-IT" : "en-US",
      };
    default:
      return state;
  }
}

function currencyReducer(state = {}, action) {
  switch (action.type) {
    case "CHANGE_CURRENCY":
      return {
        ...state,
        toggle: !state.toggle,
        value: !state.toggle ? "EUR" : "USD",
      };
    default:
      return state;
  }
}

function listsReducer(state = {}, action) {
  switch (action.type) {
    case "SET_HOME_LIST":
      return {
        ...state,
        home: action.payload,
      };
    case "SET_EXP_CITY_LIST":
      return {
        ...state,
        expCity: action.payload,
      };
    case "SET_EXP_FD_LIST":
      return {
        ...state,
        expFD: action.payload,
      };
    case "SET_FOLK_LIST":
      return {
        ...state,
        expFolk: action.payload,
      };
    case "SET_NEW_LIST":
      return {
        ...state,
        expNew: action.payload,
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  lang: langReducer,
  currency: currencyReducer,
  listsData: listsReducer,
});

const store = createStore(rootReducers, init);

export default store;
