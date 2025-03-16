import React, { useEffect, useState } from 'react'
import PageLayout from '../../components/Layouts/page-layout'
import styles from './user.module.scss'
import { FaUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../../services/constant';
import BookedShowCard from '../../components/Cards/booked-show-card';

const UserPage = () => {

  const userDetails = useSelector(state => state.user.data)

  const [userShows, setUserShows] = useState([])
  const userId = userDetails._id;
  
  console.log("shows data here =>", userShows);
 
  
  
  
  
  useEffect(() => {
    const fetchUserShows = async () => {
      const response = await axios.get(`${baseUrl}/booking/usershow/${userId}`)
      setUserShows(response.data.data)
    }

   
      
    fetchUserShows()
  }, [])


  

  
  return (
    <>
      <PageLayout>
        <div className={`${styles.user_container}`}>
          <div className={`${styles.user_left_container}`}>
            <div className={`${styles.user_profile}`}>
              <FaUser size={175} style={{ color: "#8f5eac" }} />

            </div>

            <h3>{userDetails.name}</h3>
          </div>

          <div className={`${styles.user_shows_container}`}>
              <h3>Booking History</h3>

      {userShows.map((item, key) => (

         <BookedShowCard 
         key={key} 
         title={item.showTime.movie.title} 
         poster={item.showTime.movie.poster}
         seats={item.seats}
         showtime={item.showTime.showTime}
         cinema={item.showTime.cinemaHall}
         amount={item.totalAmount}
          />
      ))}

          






          </div>


        </div>

      </PageLayout>
    </>
  )
}

export default UserPage