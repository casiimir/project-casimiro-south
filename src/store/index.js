import { combineReducers, createStore } from "redux";

const init = {
  lang: { toggle: false, value: "en-US" },
  homeData: { list: [] },
};

function langReducer(state = {}, action) {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        toggle: state.toggle ? false : true,
        value: state.toggle ? "it" : "en-US",
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({ lang: langReducer });

const store = createStore(rootReducers, init);

export default store;
