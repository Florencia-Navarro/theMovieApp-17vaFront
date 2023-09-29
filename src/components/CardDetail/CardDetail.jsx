import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
import useMovies from '../useMovies';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import { PuffLoader } from "react-spinners"

function CardDetail () {
  // const [ movie, setMovie ] = useState({})
  
  const { data, getMovies,/*  loading */ } = useMovies({})

  const { movie_id } = useParams()

  // const urlDetail = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`

  useEffect(() => {
    getMovies(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)
    // const getMovie = async () => {
    //   try{
    //     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)
    //     setMovie(data)
    //   } catch (error) {
    //     console.log(error)
    //   }}
    //   getMovie()
  }, [])

  // console.log(movie_id)
  // console.log(movie)

  return (
    <Card sx={{ maxWidth: 345 }}>
      
      {/* <PuffLoader color="#36d7b7" loading={true} size={150}/>  */}
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        alt={data.title}
      />
      <CardContent>
        <Link  to={`/trailerMovie/${data.id}`}>
          <Box>
          <PlayCircleIcon />
            Ver Trailer
          </Box>
        </Link>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.overview}
        </Typography>
      </CardContent>
        
    </Card>
  );
}

export default CardDetail
