import React from 'react'
import styles from './movie-card.module.scss'

const UpcomingCard = (props) => {
  return (
    <>
    <div className={`${styles.movie_card} container m-2 `}>

<figure>
  <img src={props.poster} alt="" />
</figure>

<div className={`${styles.upcoming_movie_title}`}>
  <h3>
    {props.title}
  </h3>
</div>



<div className={`${styles.card_upcoming_bottom} mt-4 d-flex justify-content-between align-items-center`}>
   <p>Coming Soon</p>
</div>

</div>


</>
  )
}

export default UpcomingCard