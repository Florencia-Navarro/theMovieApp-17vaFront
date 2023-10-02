import CardsMovie from "../CardMovie/CardsMovie"
import PaginationMovieApp from "../PaginationMovieApp/PaginationMovieApp"

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import axios from "axios"

import { Box } from "@mui/material"

import { PuffLoader } from "react-spinners";



function ContainCards( { nameMovie }) {
  const [ allMovies, setAllMovies ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ loading, setLoading ] = useState(true)
  
  const { categoryMovie } = useParams()

  useEffect(() => {
    const getMovies = async () => {
      try {
        let apiUrl = ""
  
        if (categoryMovie) {
          apiUrl = `https://api.themoviedb.org/3/movie/${categoryMovie}?api_key=${import.meta.env.VITE_TMDB_APY_KEY}&language=es-ES&page=${currentPage}`
        } else if (nameMovie) {
          apiUrl = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=${import.meta.env.VITE_TMDB_APY_KEY}&language=es-ES&page=${currentPage}`
        } else {
          apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_APY_KEY}&language=es-ES&page=${currentPage}`
        }
  
        const { data } = await axios.get(apiUrl)
        setAllMovies(data.results)
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    }
  
    getMovies()
  }, [categoryMovie, nameMovie, currentPage])

  
    return (
      <>
      {allMovies.length === 0 ? (
        <div style={{width: "100%", height: "100vh", marginTop: "100px", display: "flex", justifyContent: "center"}}>
          <PuffLoader color="#606d80" loading={loading} size={150} />
        </div>
      ) : (
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {allMovies.map(({ id, title, poster_path }) => (
            <CardsMovie
              id={id}
              key={id}
              title={title}
              poster_path={poster_path}
              style={{ margin: "10px", maxWidth: "300px" }}
            />
          ))}

        </Box>
        
      )}
      <Box sx={{margin: "40px"}}>
        <PaginationMovieApp setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Box>
    </>
      )
  }
  
  export default ContainCards