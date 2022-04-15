import React, { useEffect, useState } from "react";
import movieApi from "../../api/apis/movieApi";
import Home from "./Home";

export default function HomeService() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const getTrending = async () => {
    try {
      const response = await movieApi.getTrending();
      setTrending(response.results);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  const getPopular = async () => {
    try {
      const response = await movieApi.getPopular();
      setPopular(response.results);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  const getTopRate = async () => {
    try {
      const response = await movieApi.getTopRate();
      setTop(response.results);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  const getUpcoming = async () => {
    try {
      const response = await movieApi.getUpcoming();
      setUpcoming(response.results);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTrending();
    getPopular();
    getTopRate();
    getUpcoming();
  }, []);

  return (
    <Home trending={trending} popular={popular} top={top} upcoming={upcoming} />
  );
}
