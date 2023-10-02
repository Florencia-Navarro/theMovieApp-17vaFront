import useMovies from "../useMovies"

import { useEffect } from "react"

import { useParams } from "react-router-dom"

import YouTube from "react-youtube"

function CardTrailerMovie(){
    const { data, getMovies } = useMovies({})

    const { movie_id } = useParams()
    console.log(data)

    useEffect(() => {
        getMovies(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)
        
         
    }, [])

    if (data[0] && typeof data[0].key !== 'undefined' && data[0].official) {
         console.log("si hay trailer!!!!")
      } else {
        return <div style={{width: "100%", height: "100vh", fontFamily: "Gobold", backgroundColor: "#606d80",display: "flex", justifyContent: "center", alignItems: "center"}}>
            <span>ESTA PELÍCULA NO POSEE TRAILER</span>
            </div>;
      }
    
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
        autoplay: 1,
        },
      };

    return(
        <div style={{width: "100%", height: "100vh", backgroundColor: "#606d80",display: "flex", justifyContent: "center", alignItems: "center"}}>
          {data[0] && data[0].key ? (
              <YouTube videoId={data[0].key} opts={opts}/>
          ) : (
            <div style={{width: "100%", height: "100vh", fontFamily: "Gobold", display: "flex", justifyContent: "center", alignItems: "center"}}>CARGANDO...</div>
          )}
        </div>
    )
}

export default CardTrailerMovie