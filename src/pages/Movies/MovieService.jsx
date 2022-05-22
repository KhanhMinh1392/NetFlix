import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import genresApi from "../../api/apis/genresApi";
export default function MovieService() {
  const [genres, setGenres] = useState([]);

  const getMovieGenres = async () => {
    try {
      const response = await genresApi.getMovieGenres();
      setGenres(response.genres);
      return;
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getMovieGenres();
    window.scrollTo(0, 0);
  },[])
  return (
    <Movies genres={genres} />
  )
}
