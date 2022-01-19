import { axiosConfig } from "./config";

export const getStandings = ({params}) => {
    return axiosConfig.get(`/standings`, {params:params});
}