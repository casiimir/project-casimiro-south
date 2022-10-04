export const ENDPOINTS = {
  BASE: "https://api.musement.com/api/v3/",
  get CITIES() {
    return `${this.BASE}countries/84/cities?limit=7&offset=0`;
  },
  get CITY_ACTIVITIES() {
    return `${this.BASE}activities?limit=10&offset=0&category_in=new-city-activities&country_in=JP`;
  },
  get FOOD_DRINK_ACTIVITIES() {
    return `${this.BASE}activities?limit=10&offset=0&category_in=new-food-drink&country_in=JP`;
  },
  get FOLKLORE_ACTIVITIES() {
    return `${this.BASE}activities?limit=100&offset=0&category_in=new-folklore&country_in=JP`;
  },
  get NEW_ACTIVITIES() {
    return `${this.BASE}countries/84/activities?limit=100&offset=0`;
  },
  get SEARCH_CITIES() {
    return `${this.BASE}autocomplete?activity_offset=0&category_offset=0&city_offset=0&coordinates=45.7386%2C-9.3641&country_offset=0&hotel_offset=0&list_offset=0&pickup_offset=0&venue_offset=0&activity_limit=0&city_limit=10&category_limit=0&list_limit=10&hotel_limit=0&country_limit=0&venue_limit=0&text=`;
  },
};
