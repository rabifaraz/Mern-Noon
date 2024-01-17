import React from "react";
import { Product_Card } from "./Product_Card";
import { Grid, Avatar, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Img1 from "../assets/jpegs/20.jpg";
import Img2 from "../assets/jpegs/21.jpg";
import Img3 from "../assets/jpegs/22.jpg";
import Img4 from "../assets/jpegs/23.jpg";
import Img5 from "../assets/jpegs/24.jpg";
import Img6 from "../assets/jpegs/25.jpg";
import Img7 from "../assets/jpegs/26.jpg";
import Img8 from "../assets/jpegs/27.jpg";
import Img9 from "../assets/jpegs/28.jpg";
import Img10 from "../assets/jpegs/29.jpg";
import Img11 from "../assets/jpegs/30.jpg";

const products_arr = [
  {
    img_url: Img1,
    title: "Geepas 20L Mini Microwave Oven",
    rating: 4,
    sold: 232,
    dis_price: 2980,
    orignal_price: 3500,
  },
  {
    img_url: Img2,
    title: "Nikai 700W 20L Microwave Oven",
    rating: 3.5,
    sold: 232,
    dis_price: 2750,
    orignal_price: 3200,
    bestSeller: true
  },
  {
    img_url: Img3,
    title: "Sugarbear- Hair Vitamins Vegan Gummies",
    rating: 4,
    sold: 232,
    dis_price: 5850,
    orignal_price: 6500,
    bestSeller: true
  },
  {
    img_url: Img4,
    title: "Bulk Food Packaging Containers",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url: Img5,
    title: "ESSEN - Kids Smart Phone Toys for Girls",
    rating: 4,
    sold: 3890,
    dis_price: 189,
    orignal_price: 200,
  },
  {
    img_url: Img6,
    title: "43/55/65/75/85 Inch Crystal UHD CU7000 4KSmart TV",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url: Img7,
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url: Img8,
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url: Img9,
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url: Img10,
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url: Img11,
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
];

export const Products = () => {
  return (
    <>
      <Grid container>
      <Swiper
      slidesPerView={5}
      spaceBetween={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
        {products_arr.map((current_obj, index) => {
          return (
            // <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <SwiperSlide >
              <Product_Card
                //   img_url, title, rating, sold, dis_price, original_price
                card_data={current_obj}
              />
              </SwiperSlide>
            // </Grid>
          );
        })}

        </Swiper>
      </Grid>
    </>
  );
};