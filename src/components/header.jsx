import { AppBar, Avatar, Box, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from '@mui/material'
import { Notifications, KeyboardArrowDown, PermIdentity, FavoriteBorder, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import Logo from "../assets/jpegs/noon-logo-en.png";
import DubaiFlag from "../assets/jpegs/dubai.png";


const Header = () => {
  return (
    <AppBar position="static" sx={{ background: '#feee00' }}>
      <Toolbar>
        <img src={Logo} width="100" height="100" />
        <List sx={{ width: '20%', bgcolor: 'background.transparent' }}>
          <ListItem>
            <ListItemAvatar>
              <img src={DubaiFlag} width="30" height="30" />
            </ListItemAvatar>
            <ListItemText sx={{ color: 'grey' }} primary="Deliver to" secondary="Dubai" />
            <ListItemAvatar>
              <KeyboardArrowDown sx={{ color: 'grey' }} />
            </ListItemAvatar>
          </ListItem>
        </List>
        <InputBase
          sx={{ background: 'white', fontSize: 12, height: 40, width: '40%', pl: 2, borderRadius: 2 }}
          placeholder="What are you looking for?"
          inputProps={{ 'aria-label': 'search' }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <Typography color="black">
            العربية
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography color="black">
            Login
          </Typography>
          <IconButton
            size="small"
          >
            <PermIdentity />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <Typography color="black">
            Wishlist
          </Typography>
          <IconButton
            size="small"
          >
            <FavoriteBorder />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <Typography color="black">
            Cart
          </Typography>
          <IconButton
            size="small"
          >
            <ShoppingCartOutlined />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header