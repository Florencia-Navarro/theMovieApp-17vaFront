import axios from "axios"
import { useState } from "react"

function useMovies (initialValue){
    const [data, setData] = useState(initialValue)
    
    const getMovies = async (url) => {
        try{
          const { data } = await axios.get(url) 
          data.results ? setData(data.results) : setData(data)
          
        } catch (error) {
          console.log(error)
        }
      }
      return {data, getMovies} 

}

export default useMovies