export const ENDPOINTS = {
    BASE: "https://api.musement.com/api/v3/",
    get CITIES() {
        return `${this.BASE}countries/84/cities?limit=7&offset=0`
    }
}