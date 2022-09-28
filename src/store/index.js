import { combineReducers, createStore } from "redux";

const init = {
  lang: { toggle: false, value: "en-US" },
  currency: { toggle: false, value: "USD" },
  homeData: { list: [] },
};

function langReducer(state = {}, action) {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        toggle: !state.toggle,
        value: state.toggle ? "it-IT" : "en-US",
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
        value: state.toggle ? "EUR" : "USD",
      };
    default:
      return state;
  }
}

function homeReducer(state = {}, action) {
  switch (action.type) {
    case "SET_HOME_LIST":
      return {
        ...state,
        list: action.payload,
      };
      default:
        return state;
  }
}

const rootReducers = combineReducers({
  lang: langReducer,
  currency: currencyReducer,
  homeData: homeReducer,
});

const store = createStore(rootReducers, init);

export default store;
