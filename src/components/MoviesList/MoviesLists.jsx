import { Box } from "@mui/material"
import PopularMoviesList from "../PopularMoviesList/PopularMoviesList"
import TopRatedMoviesList from "../TopRatedMoviesList/TopRatedMoviesList"

function MoviesList() {

    return (
      <Box sx={{display: "flex", flexDirection: "row"}}>
        <PopularMoviesList />
        <TopRatedMoviesList />
      </Box>
    )
  }
  
  export default MoviesList