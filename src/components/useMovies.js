import axios from "axios"
import { useState } from "react"

function useMovies (initialValue){
    const [data, setData] = useState(initialValue)
    const [ loading, setLoading ] = useState(true)
    
    const getMovies = async (url) => {
      setLoading(true)
      setData([])
        try{
          const { data } = await axios.get(url) 
          data.results ? setData(data.results) : setData(data)
          setLoading(false)
          
        } catch (error) {
          console.log(error)
        }
      }
      return {data, getMovies, loading} 

}

export default useMovies