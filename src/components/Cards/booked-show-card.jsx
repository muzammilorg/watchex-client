import React from 'react'
import poster from '../../assets/banner/avengers.jpg'
import styles from './movie-card.module.scss'


const BookedShowCard = (props) => {


  const formatDateAndTime = (movieTime) => {
  const date = new Date(movieTime);

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  return `${day}, ${month}, ${year} at ${time}`;
};

return (
  <>
    <div className={`${styles.single_show_card}`}>
      
      <div className={`${styles.show_content}`} >
      <img src={props.poster} alt="" />
       <div className={`${styles.show_details}`}>
       <h3>{props.title}</h3>
        <p>{`Seats: ${props.seats}`}</p>
        <p>{`Date: ${formatDateAndTime(props.showtime)}`}</p>
        <p>{`Cinema: ${props.cinema}`}</p>
       </div>
      </div>
      <div className={`${styles.booking_amount}`}>
        <h3>{`$${props.amount}`}</h3>
        <p>Paid</p>
      </div>
    </div>
  </>
)
}

export default BookedShowCard