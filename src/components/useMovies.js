import { useState } from "react"
import axios from "axios"

function useMovies (initialValue){
    const [moviesData, setMoviesData] = useState(initialValue)
    
    const getMovies = async (url) => {
        try{
          const response = await axios.get(url) 
          const responseData = response.data
          
          if(responseData.results){
            setMoviesData(responseData.results)
          } else {
            setMoviesData(responseData)
          }
          
        } catch (error) {
          console.log(error)
        }
      }
      return { data: moviesData, getMovies } 

}

export default useMovies