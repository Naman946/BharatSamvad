import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';

const navItems = [
  { label: 'होम', href: '/' },
  { label: 'राजस्थान', href: '/rajasthan', categoryId: 'S1' },
  { label: 'उत्तर प्रदेश', href: '/uttar-pradesh', categoryId: 'S2' },
  { label: 'उत्तराखंड', href: '/uttarakhand', categoryId: 'S3' },
  { label: 'मनोरंजन', href: '/manoranjan', categoryId: 'entertainment' },
  { label: 'बॉलीवुड', href: '/bollywood', categoryId: 'bollywood' },
  { label: 'E-Paper', href: '/epaper', categoryId: 'epaper' },
];

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (href: string, categoryId?: string) => {
    setAnchorEl(null);
    navigate({
      pathname: href,
      search: categoryId ? `?categoryId=${categoryId}` : '',
    });
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'blue' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <img src="/BhartSmwadPng.jpeg" alt="Logo" style={{ height: 60, marginRight: 16 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                color="inherit"
                onClick={() => handleClose(item.href, item.categoryId)}
                sx={{ color: 'white', fontSize: '16px', mx: 1 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none' } }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={() => handleClose('/')}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.href}
                onClick={() => handleClose(item.href, item.categoryId)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
