import urlConfig from '../../config/urlConfig';
import axiosClient from '../apiClient'

const genresApi = {
    getMovieGenres: ()=> {
        const url = `/genre/movie/list?api_key=${urlConfig.api_key}`;
        return axiosClient.get(url);
    }
}
export default genresApi