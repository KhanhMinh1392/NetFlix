import React, { useState, useEffect } from "react";
import movieApi from "../../api/apis/movieApi";
import ModalTrailer from "./index";

export default function ModalTrailerService({ setShow, idMovie, show }) {
  const [trailer, setTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getMovieTrailer = async () => {
    setIsLoading(true);
    try {
      const data = {
        id_movie: idMovie,
      };
      const response = await movieApi.getTrailers(data);
      setTrailer(response.results[0].key);
      setIsLoading(false);
      return;
    } catch (error) {}
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
//   useEffect(() => {
//     if(show) {
//         handleCancel();
//     }
//     //   return () => {
//     //     handleCancel();
//     //     console.log("test");

//     // }
//   }, []);
  return <ModalTrailer show={show} setShow={setShow} trailer={trailer} />;
}
