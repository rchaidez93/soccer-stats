const axios = require("axios");
require('dotenv').config();

exports.axiosConfig = axios.create({
    baseURL: process.env.FOOTBALL_API_URL,
    headers: {
        "x-rapidapi-host": process.env.FOOTBALL_API_HOST,
        "x-rapidapi-key": process.env.FOOTBALL_API_KEY
    }
});
