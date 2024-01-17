import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Avatar, Box, Typography } from '@mui/material';

export default function Slider({ items, image, slidesPerView, spaceBetween }) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {image ? items.map(item => {
        return <SwiperSlide>
          <img src={item} />
        </SwiperSlide>
      }) : items.map(item => {
        return <SwiperSlide>
          <Box sx={{ mb: 5, mt: 5 }}>
            <Avatar sx={{ width: 100, height: 100, borderWidth: 1, borderColor: 'red' }} src={item.image} />
            <Typography>
              {item.title}
            </Typography>
          </Box>
        </SwiperSlide>
      })}

    </Swiper>
  );
}