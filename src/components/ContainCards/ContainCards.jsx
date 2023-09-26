function ContainCards({ allMovies }) {
    return (
      <>
        { allMovies.map( (movie) => 
          <div key={movie.id} style={{width: 300, height: 400, margin: "50px"}}> 
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} style={{width: 100, height: 150}}/>
            <p>{movie.overview}</p>
          </div>
        ) }
      </>
    )
  }
  
  export default ContainCards