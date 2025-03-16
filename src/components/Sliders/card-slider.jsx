import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import MovieCard from '../Cards/movie-card';
import { baseUrl } from '../../services/constant';
import axios from 'axios';

export default function CardSlider() {

    const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${baseUrl}/show/showtimes`)
        console.log('Card Slider Response:', response.data);
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
    (
        movies.slice(0, 4).map((item, key) => (
        <SwiperSlide key={key}>
            <MovieCard 
            id={item?._id}
            title={item.movie.title} 
            poster={item.movie.poster} 
            year={item.movie.year} 
            genre={item.movie.genre?.split(",")[0]} 
            runtime={item.movie.runtime} 
            ratings={item.movie.ratings?.find(rating => rating.Source === "Internet Movie Database").Value} />
        </SwiperSlide>

        
    ))
)
    
}

        
      </Swiper>
    </>
  );
}
