import { useParams } from "react-router-dom"
import useMovies from "../useMovies"
import { useEffect } from "react"
import YouTube from "react-youtube"

function CardTrailerMovie(){
    const { data, getMovies } = useMovies({})

    const { movie_id } = useParams()
    console.log(data)

    useEffect(() => {
        getMovies(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)
        
         
    }, [])


    // console.log(data)

    if (data[0] && typeof data[0].key !== 'undefined' && data[0].official) {
         console.log("si hay trailer!!!!")
      } else {
        return <div>
            <span>No se encontró Trailer</span>
            </div>;
      }
    
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return(
        <div>
        {data[0] && data[0].key ? (
        //   <div>key del video: {data[0].key}</div>
            <YouTube videoId={data[0].key} opts={opts}/>
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    )
}

export default CardTrailerMovie