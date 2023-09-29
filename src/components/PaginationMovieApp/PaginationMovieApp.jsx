import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

 function PaginationMovieApp({ setCurrentPage, currentPage }) {
  
  const handleChangePage = (e, page) => {
    setCurrentPage(page)
  }

  return (
    <Stack spacing={2}>
      <Pagination count={500} onChange={handleChangePage} page={currentPage} shape="rounded" />
      
    </Stack>
  );
}

export default PaginationMovieApp