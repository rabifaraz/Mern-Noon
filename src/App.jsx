import './App.css'
import Header from './components/header'
import Navbar from "./components/navbar";
import Slider from './components/slider'
import Cardd from './components/card'
import { Products } from "./components/Products";
import Img from "./assets/img/banner2.png";
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import Img3 from "./assets/img/banner4.png";
import Img4 from "./assets/img/banner5.png";
import Img5 from "./assets/img/banner6.png";
import Img6 from "./assets/img/banner7.png";
import jpeg1 from "./assets/jpegs/1.jpg";
import jpeg2 from "./assets/jpegs/2.jpg";
import jpeg3 from "./assets/jpegs/3.jpg";
import jpeg4 from "./assets/jpegs/4.jpg";
import jpeg5 from "./assets/jpegs/5.jpg";
import jpeg6 from "./assets/jpegs/6.jpg";
import jpeg7 from "./assets/jpegs/7.jpg";
import BannerImage from "./assets/img/banner.png";
import BannerImage2 from "./assets/img/banner5.png";
import Banner from './components/banner';
import Footer from './components/footer';

function App() {

  return (
    <>
      <Header className='container mx-auto'></Header>
      <Navbar />
      <Stack className='mx-10'>
      <Banner image={BannerImage} />
      <Box sx={{ display: 'flex' }}>
        <Slider items={[Img3, Img4, Img5, Img6]} spaceBetween={30} image slidesPerView={1} />
        <img src={Img} style={{ height: 200 }} />
      </Box>
      <Slider slidesPerView={5} spaceBetween={1} items={[
        {
          image: jpeg1,
          title: 'Car'
        },
        {
          image: jpeg2,
          title: 'Car'
        },
        {
          image: jpeg3,
          title: 'Car'
        },
        {
          image: jpeg4,
          title: 'Car'
        },
        {
          image: jpeg5,
          title: 'Car'
        },
        {
          image: jpeg6,
          title: 'Car'
        },
        {
          image: jpeg7,
          title: 'Car'
        }
      ]} />
      </Stack>
      <Stack direction="row" className='mx-10'>
        <Paper sx={{ p: 2, m: 2 }} variant='elevation'>
          <Typography variant='h6' gutterBottom>More reasons to shop</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Cardd />
            <Cardd />

          </Box>
          <br />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Cardd />
            <Cardd />

          </Box>
        </Paper>

        <Paper sx={{ p: 2, m: 2 }} variant='elevation'>
          <Stack direction="row" mb={1} justifyContent="space-between" alignItems="center">
            <Typography variant='h6' gutterBottom>Mega deals</Typography>
            <Chip label="⏱️ 09h : 10m" variant="outlined" />
            <Button variant="contained" size='small'>ALL DEALS</Button>
          </Stack>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Cardd shoppingCart badgeTitle="Laptop Deals" />
            <Cardd shoppingCart badgeTitle="Kitchen & Home Appliances" />
          </Box>
          <br />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Cardd shoppingCart badgeTitle="Sports Shoes Deals" />
            <Cardd shoppingCart badgeTitle="Wearable Deals" />
          </Box>
        </Paper>
        <Paper sx={{ p: 2, m: 2 }} variant='elevation'>
          <Typography variant='h6' gutterBottom>In focus</Typography>
          <img src={Img} style={{ height: 200, borderRadius: 30 }} />
          <br />
          <img src={Img} style={{ height: 200, borderRadius: 30 }} />
        </Paper>
      </Stack>
      <Stack className='mx-10'>
      <Typography variant='h6' gutterBottom>Recommended for you</Typography>
      <Products className='rounded-xl'></Products>
      <Banner image={BannerImage2} />
      </Stack>
      
      <Footer />
    </>
  )
}

export default App
