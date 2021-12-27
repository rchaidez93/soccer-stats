import { axiosConfig } from "./config";

export const getStandings = ({params}) => {
    axiosConfig.defaults.headers =
    {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    }
    return axiosConfig.get(`/standings`, {params:params});
}