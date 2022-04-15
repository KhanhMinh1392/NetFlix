import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../api/apis/movieApi";
import MovieDetail from "./MovieDetail";

export default function MovieDetailService() {
  const { id } = useParams();
  const [movie,setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [language, setLanguage] = useState([]);

  const getMovie = async () => {
    try {
        const data = {
            id_movie: id
        }
        const response = await movieApi.getMovie(data);
        setMovie(response);
        setGenres(response.genres);
        setLanguage(response.spoken_languages);
        return;
    } catch (error) {
        
    }
  };
  useEffect(()=> {
    getMovie();
  },[])
  return (
    <div>
      <MovieDetail movie={movie} genres={genres} language={language}/>
    </div>
  );
}
