import React from 'react'
import styles from './hero-banner.module.scss'
import dune from '../../assets/banner/dune.jpg'
import { IoPlayCircleOutline } from "react-icons/io5";
import GetTicketButton from '../Button/get-ticket-button';
import { NavLink } from 'react-router-dom';



const HeroBanner = (props) => {

    const formattedTimeHour = Math.floor(props.runtime.split(" ")[0] / 60)
    const formattedTimeMinutes = props.runtime.split(" ")[0] % 60
            return (
        <>
            <div className={`${styles.banner_container}`}>
                <img src={props.banner} alt="" />

                <div className={`${styles.banner_content} d-flex flex-column p-4`}>

                    <h2>{props.title}</h2>
                    <div className={`${styles.content_desc} d-flex justify-content-start align-items-center `}>
                        <p>{props.year}</p>
                        <p>{`${formattedTimeHour}h ${formattedTimeMinutes}m`}</p>
                        <p>{props.genre}</p>
                    </div>

                    <p className={`${styles.plot}`}>{props.plot}</p>

                    <p className={`${styles.actors}`}>Actors: <span>{props.actors}</span></p>

                    

                </div>

            </div>
        </>
    )
}

export default HeroBanner;