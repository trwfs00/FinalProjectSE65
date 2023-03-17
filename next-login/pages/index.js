import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {


  const pages = ['ตรวจสอบรถว่าง', 'รายงานการใช้รถ', 'รายงานตามวันที่'];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data: session } = useSession()
  console.log(session);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <div>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <Box sx={{
        flexGrow: 1,
        backgroundColor: "#FEFEFE",
        borderBottom: 'solid 1.5px #F1F1F1',
        height: '100vh',
      }}>
        <Container maxWidth="xl">
          <AppBar position="static" sx={{ backgroundColor: "#FEFEFE", padding: "1em 4em", boxShadow: 'none', borderBottom: 'solid 1.5px #F1F1F1' }}>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 5,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <img src='logo.png' style={{ height: "46px" }} />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mx: 2, color: '#878787', display: 'block', fontFamily: 'IBM Plex Sans Thai', fontSize: '16px', fontWeight: '500' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              {
                session
                  ? <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"

                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <img src='AccountCircle.png' style={{ width: '1.75em' }} />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      sx={{ fontFamily: 'IBM Plex Sans Thai' }}
                    >
                      <MenuItem onClick={handleClose}> โปรไฟล์</MenuItem>
                      <MenuItem onClick={() => signOut()}>ออกจากระบบ</MenuItem>
                    </Menu>
                  </div>
                  : <Button onClick={() => signIn()}
                    color="#878787">เข้าสู่ระบบ</Button>}
            </Toolbar>
          </AppBar>
          <Typography
            variant="h2"
            Wrap
            component="p"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'IBM Plex Sans Thai, sans-serif',
              fontWeight: 700,
              letterSpacing: '.12rem',
              color: '#FF7426',
              textDecoration: 'none',
              ml: 7.5,
              mt: 36
            }}
          >
            ระบบจองรถ<br></br>
            เทศบาลนครขอนแก่น
          </Typography>
        </Container>
      </Box>
    </div>
  )
}
