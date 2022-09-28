export const ENDPOINTS = {
    BASE: "https://api.musement.com/api/v3/",
    get CITIES() {
        return `${this.BASE}countries/84/cities?limit=7&offset=0`
    },
    get CITY_ACTIVITIES() {
        return `${this.BASE}activities?limit=10&offset=0&category_in=new-city-activities&country_in=JP`
    },
    get FOOD_DRINK_ACTIVITIES() {
        return `${this.BASE}activities?limit=10&offset=0&category_in=new-food-drink&country_in=JP`
    },
    get FOLKLORE_ACTIVITIES() {
        return `${this.BASE}activities?limit=100&offset=0&category_in=new-folklore&country_in=JP`
    },
    get NEW_ACTIVITIES() {
        return `${this.BASE}countries/84/activities?limit=100&offset=0`
    }
}