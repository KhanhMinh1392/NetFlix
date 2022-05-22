import urlConfig from '../../config/urlConfig';
import axiosClient from '../apiClient'

const movieApi = {
    getTrending: () => {
        const url = `/trending/all/day?api_key=${urlConfig.api_key}`;
        return axiosClient.get(url);
    },
    getPopular: () => {
        const url = `/movie/popular?api_key=${urlConfig.api_key}&page=1`;
        return axiosClient.get(url);
    },
    getTopRate: () => {
        const url = `/movie/top_rated?api_key=${urlConfig.api_key}&page=1`;
        return axiosClient.get(url);
    },
    getUpcoming: () => {
        const url = `/movie/upcoming?api_key=${urlConfig.api_key}&page=1`;
        return axiosClient.get(url);
    },
    getMovie: (param) => {
        const url = `/movie/${param.id_movie}?api_key=${urlConfig.api_key}`;
        return axiosClient.get(url);
    },
    getMovieSimilar: (param) => {
        const url = `/movie/${param.id_movie}/similar?api_key=${urlConfig.api_key}`;
        return axiosClient.get(url);
    },
    getTrailers: (param) => {
        const url = `/movie/${param.id_movie}/videos?api_key=${urlConfig.api_key}`;
        return axiosClient.get(url);
    }
}
export default movieApi