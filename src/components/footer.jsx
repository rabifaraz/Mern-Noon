import { AppBar, Avatar, Box, Stack, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from '@mui/material'
import { Notifications, KeyboardArrowDown, PermIdentity, FavoriteBorder, ShoppingCartOutlined, InfoOutlined, FacebookOutlined, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react'
import Logo from "../assets/jpegs/noon-logo-en.png";
import AppStore from "../assets/jpegs/app-store.png";
import PlayStore from "../assets/jpegs/google-play.png";
import HuaweiIcon from "../assets/jpegs/Huawei-icon.png";
import MasterCard from "../assets/jpegs/card-mastercard.png";
import TabbyCard from "../assets/jpegs/tabby_v2.png";
import TamaraCard from "../assets/jpegs/tamara-en.png";
import CodENCard from "../assets/jpegs/cod-en.png";
import VisaCard from "../assets/jpegs/card-visa.png";
import AmexCard from "../assets/jpegs/card-amex.png";
import FooterList from './footerList';


const Footer = () => {
    return (
        <Box sx={{ p: 3, background: 'white' }}>
            <Typography variant='h6' gutterBottom>Superior online shopping in the UAE</Typography>
            <Typography variant='caption' gutterBottom>As the leading destination for online shopping in the UAE, noon has everything you need under one roof. Whether you're shopping for the latest electronic products, fashion, homeware, products for kids and babies, books and stationery, sports and health essentials, beauty products, or groceries, we have millions of products in the noon UAE store. As a customer-centric online store, we make it easier to buy online with flexible payment plans that help you save, along with regular sales across our extensive product range, gift cards, wishlists, our exclusive Mashreq VIP card, our easy-to-use shopping app, and so much more.</Typography>
            <Typography variant='h6' gutterBottom>Shop the best products & brands at noon UAE
            </Typography>
            <Typography variant='caption' gutterBottom>You'll find a massive variety of products from top brands at noon UAE. Our electronics department has the latest mobile phones, along with tablets, mobile accessories, laptops, wearable technology such as smartwatches and other wearable devices, headphones (in-ear, wireless and noise-cancelling), audiovisual gear, a selection of cameras, televisions, video game consoles such as PC and Xbox controllers, and video games. We have products from Samsung, Xiaomi, Sony, HP, Dell, Huawei, Lenovo, Apple, and many other leading tech brands.
            </Typography>
            <Typography variant='h6' gutterBottom>Hassle-free UAE online shopping
            </Typography>
            <Typography variant='caption' gutterBottom>When you buy online at noon, you will always have peace of mind knowing that you are getting the best level of service. We take the hassle out of online shopping in Abu Dhabi and Dubai, with a number of features and flexible payment plans that make shopping simpler, faster, and better. Our Buy Now, Pay Later plans include Tabby, with orders split over 4 payments, and Tamara, with orders split over 3 payments. Both plans are interest-free. We accept credit cards and debit cards from Emirates NBD, FAB bank, Mashreq bank, ADCIB, and ADIB, and cash on delivery. For even more convenience, we have a No-Cost EMI. We have a 15-day return policy that takes even more stress out of shopping.
            </Typography>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#efefef', paddingX: 5 }}>
                <Box>
                    <Typography variant='h6' gutterBottom>We're Always Here To Help
                    </Typography>
                    <Typography variant='caption' gutterBottom>Reach out to us through any of these support channels
                    </Typography>
                </Box>
                <List sx={{ width: '100%', maxWidth: 360, display: 'flex' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <IconButton
                                size="small"
                            >
                                <InfoOutlined />
                            </IconButton>
                        </ListItemAvatar>
                        <ListItemText primary="Help Center" secondary="help.noon.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <IconButton
                                size="small"
                            >
                                <InfoOutlined />
                            </IconButton>
                        </ListItemAvatar>
                        <ListItemText primary="Email Support" secondary="care@noon.com" />
                    </ListItem>
                </List>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ display: 'flex', gap: 8 }}>
                <FooterList header={"ELECTRONICS"} subText={[
                    "Mobiles",
                    "Tablets",
                    "Laptops",
                    "Home Appliances",
                    "Camera, Photo & Videos",
                    "Televisions",
                    "Headphones",
                    "Video Games",
                    "Best Mobile Phones",
                ]} />
                <FooterList header={"ELECTRONICS"} subText={[
                    "Mobiles",
                    "Tablets",
                    "Laptops",
                    "Home Appliances",
                    "Camera, Photo & Videos",
                    "Televisions",
                    "Headphones",
                    "Video Games",
                    "Best Mobile Phones",
                ]} />
                <FooterList header={"ELECTRONICS"} subText={[
                    "Mobiles",
                    "Tablets",
                    "Laptops",
                    "Home Appliances",
                    "Camera, Photo & Videos",
                    "Televisions",
                    "Headphones",
                    "Video Games",
                    "Best Mobile Phones",
                ]} />
                <FooterList header={"ELECTRONICS"} subText={[
                    "Mobiles",
                    "Tablets",
                    "Laptops",
                    "Home Appliances",
                    "Camera, Photo & Videos",
                    "Televisions",
                    "Headphones",
                    "Video Games",
                    "Best Mobile Phones",
                ]} />
                <FooterList header={"ELECTRONICS"} subText={[
                    "Mobiles",
                    "Tablets",
                    "Laptops",
                    "Home Appliances",
                    "Camera, Photo & Videos",
                    "Televisions",
                    "Headphones",
                    "Video Games",
                    "Best Mobile Phones",
                ]} />
                <FooterList header={"ELECTRONICS"} subText={[
                    "Mobiles",
                    "Tablets",
                    "Laptops",
                    "Home Appliances",
                    "Camera, Photo & Videos",
                    "Televisions",
                    "Headphones",
                    "Video Games",
                    "Best Mobile Phones",
                ]} />
                <FooterList header={"ELECTRONICS"} subText={[
                    "Mobiles",
                    "Tablets",
                    "Laptops",
                    "Home Appliances",
                    "Camera, Photo & Videos",
                    "Televisions",
                    "Headphones",
                    "Video Games",
                    "Best Mobile Phones",
                ]} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: 5 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h6' gutterBottom>SHOP ON THE GO</Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <img src={AppStore} width="100" />
                        <img src={PlayStore} width="100" />
                        <img src={HuaweiIcon} width="100" />
                    </Box>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h6' gutterBottom>CONNECT WITH US</Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <IconButton
                            sx={{ background: 'yellow' }}
                        >
                            <FacebookOutlined />
                        </IconButton>
                        <IconButton
                            sx={{ background: 'yellow' }}
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            sx={{ background: 'yellow' }}
                        >
                            <Instagram />
                        </IconButton>
                        <IconButton
                            sx={{ background: 'yellow' }}
                        >
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', pb: 5 }}>
                <Typography variant='caption'>© 2024 noon. All Rights Reserved</Typography>
                <img src={MasterCard} />
                <img src={VisaCard} />
                <img src={TabbyCard} />
                <img src={TamaraCard} />
                <img src={AmexCard} />
                <img src={CodENCard} />
                <Typography variant='body2'>Careers</Typography>
                <Typography variant='body2'>Warranty Policy</Typography>
                <Typography variant='body2'>Sell with us</Typography>
                <Typography variant='body2'>Terms of Use</Typography>
                <Typography variant='body2'>Terms of Sale</Typography>
                <Typography variant='body2'>Privacy Policy</Typography>
                <Typography variant='body2'>Consumer Rights</Typography>
            </Box>
        </Box>
    )
}

export default Footer