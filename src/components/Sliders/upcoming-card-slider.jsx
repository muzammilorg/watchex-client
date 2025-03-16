import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import { baseUrl } from '../../services/constant';
import axios from 'axios';
import UpcomingCard from '../Cards/upcoming-card';

export default function UpcomingCardSlider() {

    const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/movies`)
        console.log('Upcoming Card Slider Response:', response.data);
        setMovies(response.data.data)

      } catch (error) {
        console.log(error)
      }

    }
    fetchMovie()

  }, [])

  return (
    <>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

{
    movies.length > 0 ? (
        movies.slice(5).map((item, key) => (
        <SwiperSlide key={key}>
            <UpcomingCard 
            title={item.title} 
            poster={item.poster} 

             />
        </SwiperSlide>

        
    ))
)
    :
    <p>Loading...</p>
}

        
      </Swiper>
    </>
  );
}
