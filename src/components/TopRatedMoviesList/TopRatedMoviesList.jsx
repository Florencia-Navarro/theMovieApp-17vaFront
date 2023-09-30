import useMovies from '../useMovies';

import {  useEffect } from 'react';

import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



 function TopRatedMoviesList() {

  const { data, getMovies } = useMovies([]) 


  useEffect(() => {

    getMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_APY_KEY}`)

  }, [])


  return (
    <Box sx={{width: "1000px", maxHeight: 300, overflowX: "hidden", overflowY: "scroll", margin: "100px", "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#dce0e6",
    }, "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#2b4c7e",
      borderRadius: "5px",
    }, "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#567ebb",
    }}}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{margin: "10px auto",position: "sticky", top: 0, zIndex: 1, backgroundColor: "#2b4c7e",  padding: "20px 15px"}}
      >
        PELICULAS MEJOR PUNTADAS
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'white', border: "solid #dce0e6 1px"}}>

        {data.map((movie)=> <Link to={`/movieDetail/${movie.id}`} key={movie.id} style={{textDecoration: "none"}}> 
        <Box >
         <ListItem alignItems="flex-start" style={{displa:"flex", justifyContent: "space-between"}}>
          <Box sx={{display: "flex", flexDirection: "row"}}> 
            <ListItemAvatar>
              <Avatar alt={movie.title} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} sx={{margin: "auto 0"}} />
            </ListItemAvatar>
            <ListItemText
              primary={movie.title}
              sx={{margin: "auto 0", color: "black"}}
            />
          </Box>
          <ArrowForwardIosIcon sx={{margin: "auto 0", color: "black"}}/>
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