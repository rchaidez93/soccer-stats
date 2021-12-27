import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: "https://v3.football.api-sports.io",
});