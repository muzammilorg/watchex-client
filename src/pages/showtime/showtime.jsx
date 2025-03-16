import React, { useEffect, useState } from 'react'
import PageLayout from '../../components/Layouts/page-layout'
import styles from './showtime.module.scss'
import ShowTimeMovieCard from '../../components/Cards/showtime-movie-card'
import axios from 'axios'
import { baseUrl } from '../../services/constant'

const ShowTime = () => {



  const [movies, setMovies] = useState([])

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${baseUrl}/show/showtimes`)
        console.log(response.data.data)
        
        setMovies(response.data.data)


      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()

  }, [])


  
  
 
    


  return (
    <>
      <PageLayout>

        <div className={`${styles.showtime_container}`}>

          <div className={`${styles.showtime_head}`}>
            <h2>Showtime</h2>
            <p>Select Shows</p>
            <div className={`${styles.card_container}`}>

              {
                movies?.map((item, key) => (
                  <ShowTimeMovieCard
                    key={key}
                    id={item?._id}
                    title={item.movie.title}
                    poster={item.movie.poster}
                    year={item.movie.year}
                    genre={item.movie.genre?.split(",")[0]}
                    runtime={item.movie.runtime}
                    actors={item.movie.actors}
                    cinema={item.cinemaHall}
                  />

                )
              )
              }


            </div>
          </div>

        </div>


      </PageLayout>
    </>
  )
}

export default ShowTime