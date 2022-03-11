import { SetStateAction, useState } from "react";
import Listagem from "../Listagem";
import logoURL from "../../assets/luxflix-logo.png"
import Movie from "../../Movie";
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { GifBox } from "@mui/icons-material";

const pages = ['1960-1995', '1996-2010', '2011-2020', '2021-2022'];

function NavBar({ movieList, movieStatus }: {movieList: Movie[]; movieStatus: any[] }): JSX.Element {   
    const [listNumber, setListNumber] = useState('2011-2020')
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    console.log(event.currentTarget)
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    function handleClick(event: React.MouseEvent<HTMLElement>): void{
        setListNumber(event.currentTarget.innerText)
    }

    return (
        <>
        <AppBar position="static" sx={{backgroundColor:'var(--color-pallete-bg-dark)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
            src={logoURL}
            component="img"
            sx={{ height:50, flexGrow: 0, display: { xs: 'none', md: 'flex' } }}
          >
            
          </Box>

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleClick}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            src={logoURL}
            component="img"
            sx={{ height:50, flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
          >
            
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          
          
        </Toolbar>
      </Container>
    </AppBar>
        <Listagem listNumber={listNumber} movieList={movieList} movieStatus={movieStatus}/>
        </>

    )
}

export default NavBar;