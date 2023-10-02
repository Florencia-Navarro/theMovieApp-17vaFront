import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchMovieInput({setNameMovie }) {
    

    const handleSearchChange = (e) => {
        setNameMovie(e.target.value)
    }
    

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', justifyContent: 'center', width: 400 , margin: "50px auto"}}
    >
     
      <InputBase
        onChange={handleSearchChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Busca una pelicula por su nombre"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}

export default SearchMovieInput