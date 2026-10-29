var axios = require("axios");

var instance = axios.create({
    baseURL: process.env.VUE_APP_ROUTE_BASE_URL
        ? process.env.VUE_APP_ROUTE_BASE_URL
        : "",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    data: {},
});

export default instance;
