import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CardDetail () {
  const [ movie, setMovie ] = useState({})

  const { movie_id } = useParams()

  useEffect(() => {
    const getMovie = async () => {
      try{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)
        setMovie(data)
      } catch (error) {
        console.log(error)
      }}
      getMovie()
  }, [])

  // console.log(movie_id)
  // console.log(movie)

  return (
    <Card sx={{ maxWidth: 345 }}>
      
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}

export default CardDetail
