import { AppBar, Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material';
import React from 'react'
import Logo from "../assets/jpegs/noon-logo-en.png";
import Imgg from "../assets/jpegs/12.jpg";


const Cardd = ({ shoppingCart, badgeTitle }) => {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <Box sx={{ position: 'relative' }}>
                    {shoppingCart && <Typography variant='body2' sx={{ position: 'absolute', top: 0, right: 0, background: 'yellow', p: 0.5, color: 'red' }}>
                        {badgeTitle}
                    </Typography>}
                    <CardMedia
                        component="img"
                        sx={{ height: 150 }}
                        image={Imgg}
                    />
                    {shoppingCart && <IconButton sx={{ position: 'absolute', bottom: 5, right: 5, background: 'white' }}>
                        <AddShoppingCart />
                    </IconButton>}
                </Box>
                <CardContent>
                    {!shoppingCart && <Typography gutterBottom component="div">
                        Top rated product
                    </Typography>}
                    <Typography variant="body2" color="text.secondary">
                        Get the best at the best price
                    </Typography>
                    {shoppingCart && <Typography variant='h6' component="div">
                    <s>123</s> 6255 AED
                    </Typography>}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Cardd
