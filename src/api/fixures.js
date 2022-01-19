import { axiosConfig } from "./config";

export const getLiveFixtures = () => {
    return axiosConfig.get(`/fixtures?live=all&season=2021&league=39`);
};

export const getFixtures = ({params}) => {
    return axiosConfig.get(`/fixtures`, {params:params});
};

export const getGameStatistics = ({params}) => {
    return axiosConfig.get(`/fixtures/statistics`, {params:params});
};

export const getGameEvents = ({params}) => {
    return axiosConfig.get(`/fixtures/events`, {params:params});
};
