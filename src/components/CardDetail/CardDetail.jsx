import useMovies from '../useMovies';

import { useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import './../../App.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';


function CardDetail () {
  
  const { data, getMovies} = useMovies({})

  const { movie_id } = useParams()

  console.log(movie_id)

  useEffect(() => {

    getMovies(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)

  }, [])

  console.log(data)

  if (!data){
    return <div>Cargando...</div>
  }


  return (
    <div style={{backgroundColor: "#dce0e6", padding: "50px"}}>
      <div style={{height: { xs: "300px", md: "100vh"}, backgroundColor: "#dce0e6", backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", display: "flex"}}>
      
        <Card sx={{ maxWidth: 400, maxHeight: 850, margin: { xs: "10px", md: "auto 300px"}, boxShadow: "-6px -5px 22px 8px rgba(0,0,0,0.75)"}}>
          
          <CardMedia
            component="img"
            height="550"
            image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.title}
          />
          <CardContent sx={{marginLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <div style={{display: "flex", margin: "10px 0", flexDirection: "row", justifyContent: "space-between"}}> 
              <Link  to={`/trailerMovie/${data.id}`} style={{textDecoration: "none"}}>
                <Button sx={{color: "black", border: "solid #606d80 1px"}}>
                  Ver Trailer
                </Button>
              </Link>
              <Link to="/" style={{textDecoration: "none"}} >
                <Stack spacing={2} direction="row">
                  <Button sx={{color: "black", border: "solid #606d80 1px"}}>Atras</Button>
                </Stack>
              </Link>
            </div>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              {data.overview}
            </Typography>
          </CardContent>
          {/* <Link to="/" style={{textDecoration: "none", margin: "5px 10px"}} >
            <Stack spacing={2} direction="row">
              <Button sx={{color: "black", border: "solid #606d80 1px"}}>Atras</Button>
            </Stack>
          </Link> */}
            
        </Card>
      </div>
    </div>
  );
}

export default CardDetail
