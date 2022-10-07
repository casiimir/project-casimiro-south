import { combineReducers, createStore } from "redux";

const init = {
  lang: { toggle: false, value: "en-US" },
  currency: { toggle: false, value: "USD" },
  listsData: {
    home: [],
    expCity: [],
    expFD: [],
    expFolk: [],
    expNew: [],
    cityAct: [],
    cartList: JSON.parse(localStorage.getItem("cart_list")) ?? [],
  },
  cityData: {
    objectData: {
      id: 189,
      name: "Tokyo",
      meta: "Find out what’s happening in Tokyo and book your tickets for the best museums, attractions and tours in advance. Skip the line, make your trip more enjoyable. Museums, tours, attractions at your fingertips.",
      headline: "Welcome to Tokyo",
      cover_img:
        "https://images.musement.com/cover/0097/13/adobestock-314643692-editorial-use-only-jpeg_header-9612533.jpeg",
    },
  },
  activityData: {
    objectData: {},
  },
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
    case "CITY_ACTIVITIES_LIST":
      return {
        ...state,
        cityAct: action.payload,
      };
    case "SET_CART_LIST":
      return {
        ...state,
        cartList: [...new Set([...state.cartList, action.payload])],
      };
    case "DEL_CART_ITEM":
      return {
        ...state,
        cartList: [
          ...state.cartList.filter((el) => el.uuid !== action.payload),
        ],
      };
    default:
      return state;
  }
}

function cityDataReducer(state = {}, action) {
  switch (action.type) {
    case "SET_CITY_DATA":
      return {
        ...state,
        objectData: action.payload,
      };

    default:
      return state;
  }
}
function activityDataReducer(state = {}, action) {
  switch (action.type) {
    case "SET_ACTIVITY_DATA":
      return {
        ...state,
        objectData: action.payload,
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  lang: langReducer,
  currency: currencyReducer,
  listsData: listsReducer,
  cityData: cityDataReducer,
  activityData: activityDataReducer,
});

const store = createStore(rootReducers, init);

export default store;
