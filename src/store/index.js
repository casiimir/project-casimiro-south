import { combineReducers, createStore } from "redux";

const init = {
  lang: { toggle: false, value: "en-US" },
  currency: { toggle: false, value: "USD" },
};

function langReducer(state = {}, action) {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        toggle: !state.toggle,
        value: state.toggle ? "it" : "en-US",
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

const rootReducers = combineReducers({
  lang: langReducer,
  currency: currencyReducer,
});

const store = createStore(rootReducers, init);

export default store;
