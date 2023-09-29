import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import CardsMovie from "../CardMovie/CardsMovie"


function ContainCards() {
  const [ allMovies, setAllMovies ] = useState([])
  
  const { categoryMovie } = useParams()

  useEffect(() => {
    if(!categoryMovie){
      const getMovies = async () => {
        try{
          const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)
          setAllMovies(data.results)
        } catch (error) {
          console.log(error)
        }
      }
    getMovies()
    } else {
      
      const getMovies = async () => {
        try{
          const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${categoryMovie}?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`) /* https://api.themoviedb.org/3/search/movie?language=es-ES&page=${currentPage}&api_key=${apiKey}&query=${keywordSearch} */
          setAllMovies(data.results)
        } catch (error) {
          console.log(error)
        }
      }
      getMovies()
    }
  }, [categoryMovie])

  // console.log(allMovies)

  // console.log(categoryMovie)

  // https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=a5c720fc0d8fdad4f6cd196d4c5cf58a

    return (
      <>
        { allMovies.map( ({ id, title, poster_path, overview }) => <CardsMovie key={id} id={id} title={title} poster_path={poster_path} overview={overview}/>
          
        ) }
      </>
    )
  }
  
  export default ContainCards