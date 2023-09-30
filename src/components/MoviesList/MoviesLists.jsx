import PopularMoviesList from "../PopularMoviesList/PopularMoviesList"
import TopRatedMoviesList from "../TopRatedMoviesList/TopRatedMoviesList"

import { Container } from "@mui/material"

function MoviesList() {

    return (
      <Container sx={{with: "100vw",display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
        <PopularMoviesList />
        <TopRatedMoviesList />
      </Container>
    )
  }
  
  export default MoviesList