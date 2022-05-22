import urlConfig from '../../config/urlConfig';
import axiosClient from '../apiClient'

const userApi = {
    searchMovie: (param)=> {
        const url = `/search/movie?api_key=${urlConfig.api_key}&query=${param.value}`;
        return axiosClient.get(url);
    },
}
export default userApi