import useMovies from "../useMovies"

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import YouTube from "react-youtube"

import { PuffLoader } from "react-spinners";


function CardTrailerMovie(){
    const [ loading, setLoading ] = useState(true)

    const { data, getMovies } = useMovies({})

    const { movie_id } = useParams()

    useEffect(() => {
        getMovies(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)
        
        setLoading(false) 
    }, [])

    if (data[0] && typeof data[0].key !== 'undefined' && data[0].official) {
         console.log("SI HAY TRAILER!!!!")
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
        <div style={{ height: "100vh", backgroundColor: "#606d80",display: "flex", justifyContent: "center", alignItems: "center"}}>
          {data[0] && data[0].key ? (
              <YouTube videoId={data[0].key} opts={opts}/>
          ) : (
            <div style={{marginTop: "100px", display: "flex", justifyContent: "center"}}>
              <PuffLoader color="#606d80" loading={loading} size={150} />
            </div> 
            
          )}
        </div>
    )
}

export default CardTrailerMovie

