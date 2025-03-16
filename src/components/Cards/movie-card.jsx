import React, { useEffect, useState } from 'react'
import styles from './movie-card.module.scss'

import { FaStar } from "react-icons/fa";
import GetTicketButton from '../Button/get-ticket-button';
import { NavLink } from 'react-router-dom';


const MovieCard = (props) => {

  const formattedRuntime = `${Math.floor(props.runtime.split(" ")[0] / 60)}h ${props.runtime.split(" ")[0] % 60}m`;

  return (
    <>
      <div className={`${styles.movie_card} container m-2 `}>

        <figure>
          <img src={props.poster} alt="" />
        </figure>

        <div className={`${styles.movie_title}`}>
          <h3>
            {props.title}
          </h3>
        </div>

        <div className={`${styles.show_details} d-flex justify-content-start gap-2`}>
          <p>{`${props.year} - ${props.genre} - ${formattedRuntime}`}</p>
        </div>

        <div className={`${styles.card_bottom} mt-2 d-flex justify-content-between align-items-center`}>
            <GetTicketButton><NavLink to={`/show/${props.id}`}>Get Ticket</NavLink></GetTicketButton>
            <div className={`${styles.card_rating_section} d-flex align-items-center justify-content-center gap-1`}>
              <FaStar />
              <p>{props.ratings.split("/")[0] / 2}</p>
            </div>
        </div>

      </div>


    </>
  )
}

export default MovieCard