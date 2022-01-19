import { axiosConfig } from "./config";

export const getTeams = ({params}) => {
    return axiosConfig.get(`/teams/all`, {params:params});
};