import { axiosConfig } from "./config";

export const getLiveFixtures = () => {
    axiosConfig.defaults.headers =
    {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    }
    return axiosConfig.get(`/fixtures?live=all&season=2021&league=39`);
};

export const getFixtures = ({params}) => {
    axiosConfig.defaults.headers =
    {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    }

    return axiosConfig.get(`/fixtures`, {params:params});

};

export const getGameStatistics = ({params}) => {
    axiosConfig.defaults.headers =
    {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    }

    return axiosConfig.get(`/fixtures/statistics`, {params:params});
};

export const getGameEvents = ({params}) => {
    axiosConfig.defaults.headers =
    {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    }

    return axiosConfig.get(`/fixtures/events`, {params:params});
};
