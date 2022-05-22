import React , { useEffect, useState } from 'react'
import userApi from '../../api/apis/userApi'

import Search from './Search'
import './Search.css'
export default function () {
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async(value) => {
    if(value !== undefined) {
      setIsLoading(true);
      try {
        const param = {
          value: value
        }
        const response = await userApi.searchMovie(param);
        setIsLoading(false);
        setSearch(response.results)
      } catch (error) {
        console.log(`https://stackoverflow.com/search?q=${error}`);
      }
    }
  }
  useEffect(()=> {
    searchMovies();
  },[search])
  return (
    <div>
        <Search searchMovies={(value)=> searchMovies(value)} search={search} isLoading={isLoading}/>
    </div>
  )
}
