import {  useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';


 function TopRatedMoviesList() {
  const [ allMovies, setAllMovies ] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      try{
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`) 
        setAllMovies(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [])

  console.log(allMovies)

  return (
    <Box sx={{ maxHeight: 600, overflowX: "hidden", overflowY: "scroll", margin: "100px", "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#f1f1f1",
    }, "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: "5px",
    }, "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555",
    }}}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{margin: "10px auto"}}
      >
        PELICULAS MEJOR PUNTADAS
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgba(197, 76, 1, 0.3)' }}>
        {allMovies.map((movie)=> <Link to={`/movieDetail/${movie.id}`} key={movie.id}> 
        <Box >
         <ListItem alignItems="flex-start" style={{displa:"flex", justifyContent: "space-between"}}>
          <Box sx={{display: "flex", flexDirection: "row"}}> 
            <ListItemAvatar>
              <Avatar alt={movie.title} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} sx={{margin: "auto 0"}} />
            </ListItemAvatar>
            <ListItemText
              primary={movie.title}
              sx={{margin: "auto 0"}}
            />
          </Box>
          <ArrowForwardIosIcon sx={{margin: "auto 0"}}/>
        </ListItem>
        <Divider variant="inset" component="li" />
        </Box>
        </Link>
        )}
        
        
      </List>
    </Box>
  );
}

export default TopRatedMoviesList