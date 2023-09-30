import { useState } from 'react';
import { Link } from "react-router-dom";
import './../../App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{padding: "20px 5px", backgroundColor: "#1f1f20"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{textDecoration:"none"}}>
            <Container >
              <img src="/src/assets/img/clapperboard-29986_1280.png" style={{width: "80px", paddingLeft: "80px"}}/>
            </Container>
            <Typography
              variant="h6"
              noWrap
              component="span"
              
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Gobold',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#567ebb',
                textDecoration: 'none',
                fontSize: "2rem",
                
              }}
            >
              THE MOVIE APP
            </Typography>
          </Link>
          

          <Typography
            variant="h5"
            noWrap
            component="span"
           
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Gobold',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            THE MOVIE APP
          </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  
                }}
              >                
                <MenuItem  onClick={handleCloseNavMenu} sx={{display: "flex", flexDirection: "column"}}>
                  <Link to="/" style={{textDecoration:"none"}}>
                    <Typography textAlign="center"  sx={{padding: "10px 5px", color: "black"}}>HOME</Typography>
                  </Link>
                  <Link to="/movieList/now_playing" style={{textDecoration:"none"}}>
                    <Typography textAlign="center" sx={{padding: "10px 5px", color: "black"}}>ULTIMOS LANZAMIENTOS</Typography>
                  </Link>
                  <Link to="/movieList/popular" style={{textDecoration:"none"}}>
                    <Typography textAlign="center" sx={{padding: "10px 5px", color: "black"}}>POPULARES</Typography>
                  </Link>
                  <Link to="/searchMovie/movieName" style={{textDecoration:"none"}}>
                    <Typography textAlign="center" sx={{padding: "10px 5px", color: "black"}}>BUSCAR</Typography>
                  </Link>
                  
                </MenuItem>
              </Menu>
            </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/" style={{textDecoration:"none"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  HOME
                </Button>
              </Link>
              <Link to="/movieList/now_playing" style={{textDecoration:"none"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  ULTIMOS LANZAMIENTOS
                </Button>
              </Link>
              <Link to="/movieList/popular" style={{textDecoration:"none"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  POPULARES
                </Button>
              </Link>
              <Link to="/searchMovie/movieName" style={{textDecoration:"none"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  BUSCAR
                </Button>
              </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header