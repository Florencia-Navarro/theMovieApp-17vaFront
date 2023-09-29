import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import CardsMovie from "../CardMovie/CardsMovie"


function ContainCards( { nameMovie }) {
  const [ allMovies, setAllMovies ] = useState([])
  
  const { categoryMovie } = useParams()

  useEffect(() => {
    const getMovies = async () => {
      try {
        let apiUrl = ""
  
        if (categoryMovie) {
          // Si categoryMovie tiene un valor, cargar películas por categoría
          apiUrl = `https://api.themoviedb.org/3/movie/${categoryMovie}?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`
        } else if (nameMovie) {
          // Si nameMovie tiene un valor, busca por nombre de película
          apiUrl = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=${import.meta.env.VITE_TMDB_APY_KEY}`
        } else {
          // Si no hay categoryMovie ni nameMovie, cargar películas populares 
          apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`
        }
  
        const { data } = await axios.get(apiUrl)
        setAllMovies(data.results)
      } catch (error) {
        console.log(error)
      }
    };
  
    getMovies()
  }, [categoryMovie, nameMovie])

  
    return (
      <>
        {allMovies.length === 0 ? (
        <p>No se encontraron resultados</p>
        ) : (
        allMovies.map(({ id, title, poster_path, overview }) => (
          <CardsMovie
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
            overview={overview}
          />
        ))
      )}
        
      </>
    )
  }
  
  export default ContainCards