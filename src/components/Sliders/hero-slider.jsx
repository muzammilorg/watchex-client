import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { baseUrl } from '../../services/constant.js';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import HeroBanner from '../Hero/hero-banners.jsx';


export default function HeroSlider() {

  const [movies, setMovies] = useState([])

  useEffect(()=> {
    const fetchMovies = async () =>{
      try {

        const response = await axios.get(`${baseUrl}/show/showtimes`)
        console.log('Hero Slider Response:', response.data);

         setMovies(response.data.data)
        
      } catch (error) {
        console.error('Error fetching movies:', error);

      }
    }

    fetchMovies()
  },[])

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        watchSlidesProgress={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slideToClickedSlide={true}
        
      >
        {movies.length > 0 ? (
        movies.map((item, key) => (
          <SwiperSlide key={key}>

            <HeroBanner 
            id={item?._id}
            title={item.movie.title} 
            banner={item.movie.bannerImg} 
            year={item.movie.year}
            runtime={item.movie.runtime}
            genre={item.movie.genre}
            plot={item.movie.plot}
            actors={item.movie.actors}
            
  />

            
          </SwiperSlide>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </Swiper>
    </>
  );
}
