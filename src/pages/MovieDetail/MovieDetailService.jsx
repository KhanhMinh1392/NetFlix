import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../api/apis/movieApi";
import MovieDetail from "./MovieDetail";

export default function MovieDetailService() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [language, setLanguage] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const getMovie = async () => {
    setIsLoading(true);
    try {
      const data = {
        id_movie: id,
      };
      const response = await movieApi.getMovie(data);
      setMovie(response);
      setGenres(response.genres);
      setLanguage(response.spoken_languages);
      setIsLoading(false)
      return;
    } catch (error) {}
  };
  const getMovieSimilar = async () => {
    setIsLoading(true);
    try {
      const data = {
        id_movie: id,
      };
      const response = await movieApi.getMovieSimilar(data);
      setSimilar(response.results);
      setIsLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getMovie();
    getMovieSimilar();
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div>
      <MovieDetail
        movie={movie}
        genres={genres}
        language={language}
        similar={similar}
        isLoading={isLoading}
      />
    </div>
  );
}
