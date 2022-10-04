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
  },
  cityData: {
    id: 189,
    name: "Tokyo",
    content:
      "Tokyo is the capital city where blazing hyperactive neon lights meet the ancient Zen traditions that define Japanese culture.\nWith a population of almost 35.000 million people, it is considered one of the biggest metropolises on the planet. Perfectly balanced, where its heart has a technological pulse and its soul radiates its ancient past, travelers have an infinity of choices to choose from when visiting this city.\nIts traditional core lies in the Asakusa district, where old Buddhist temples and shrines echo Tokyo's spirituality. The district's iconic and most ancient building is the Senso-ji temple, visited daily by thousands of people. Visitors should also take a stroll down Nakamise Dori, a market street next to Asakusa, for souvenirs and delicious food.\nFor hip neighborhoods and chilled out vibes, travelers should head over to the Harajuku district and Yoyogi park to enjoy local laid-back experiences. Moving on to the more modern side of the city, the Tokyo Skytree, Tokyo Tower and Shibuya district are a must-see to embrace the city's modern atmosphere and high-level shopping.\nFor a more family and youth-oriented atmosphere, Tokyo Disneyland and the Akihabara Electric Town, an area packed with anime, video-gamed and neon themed activities are a must when visiting this city.\nIf travelers instead want to experience fun nights out, entertainment and dining then the Shinjuku neighborhood is perfect for these moments that will last a lifetime.\nLast but not least, Tokyo is one of the culinary capitals of the world, where you can virtually have any kind of Japanese dish, be it street-food or a more \"top-notch\" dining experience.",
    headline: "Welcome to Tokyo",
    cover_img:
      "https://images.musement.com/cover/0097/13/adobestock-314643692-editorial-use-only-jpeg_header-9612533.jpeg",
  },
  activityData: {
    objectData: {}
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
    default:
      return state;
  }
}

function cityDataReducer(state = {}, action) {
  switch (action.type) {
    case "SET_CITY_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "SET_CITY_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_CITY_CONTENT":
      return {
        ...state,
        content: action.payload,
      };
    case "SET_CITY_HEADLINE":
      return {
        ...state,
        headline: action.payload,
      };
    case "SET_CITY_COVER_IMG":
      return {
        ...state,
        cover_img: action.payload,
      };
    default:
      return state;
  }
}
function activityDataReducer(state = {}, action) {
  switch (action.type) {
    case "SET_ACTIVITY_DATA":
      return {
        ...state, objectData: action.payload,
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
