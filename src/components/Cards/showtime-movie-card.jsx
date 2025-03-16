import React from 'react'
import styles from './movie-card.module.scss'
import banner from '../../assets/banner/avengers.jpg'
import GetTicketButton from '../Button/get-ticket-button'
import { NavLink } from 'react-router-dom'

const ShowTimeMovieCard = (props) => {

  const formattedRuntime = `${Math.floor(props.runtime.split(" ")[0] / 60)}h ${props.runtime.split(" ")[0] % 60}m`;


  return (
    <>
    <div className={`${styles.show_card}`}>
        <div className={`${styles.show_card_left}`}>
            <img src={props.poster} alt="" />

        </div>

        <div className={`${styles.show_card_right}`}>
            <h3>{props.title}</h3>
        

            <ul>
            <li>{`Year: ${props.year}`}</li>
                <li>{`Actors: ${props.actors}`}</li>
                <li>{`Genre: ${props.genre}`}</li>
                <li>{`Runtime: ${formattedRuntime}`}</li>
            </ul>

            <h4>{`Cinema: ${props.cinema}`}</h4>
            <div className={`${styles.show_card_buttons}`}>

            <GetTicketButton><NavLink to={`/show/${props.id}`}>Get Ticket</NavLink></GetTicketButton>

            </div>

        </div>

    </div>
    
    </>
  )
}

export default ShowTimeMovieCard