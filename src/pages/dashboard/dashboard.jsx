import React from 'react'
import styles from "./dashboard.module.scss"
import { MdAddCircle } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { BsCameraReelsFill } from "react-icons/bs";
import { PiFilmReelFill } from "react-icons/pi";


const Dashboard = () => {
  return (
     <>
     <div className={styles.dashboard_container}>
        <h2>Dashboard</h2>

        <div className={styles.add_shows_container}>
            <div className={styles.add_movie}> 
            <NavLink to="/add-movie" style={{cursor: "pointer"}}> 
            <MdAddCircle size={62} /> 
            </NavLink>

                    
                <h3>Add Upcoming Movies</h3>
            </div>
            <div className={styles.add_movie}>
                <NavLink to="/add-show" style={{cursor: "pointer"}} >
                <MdAddCircle size={62}/>
                </NavLink>

                <h3>Add Upcoming Shows</h3>
            </div>


            <div className={styles.add_movie}>
                <NavLink to="/upcoming-shows" style={{cursor: "pointer"}} >
                <BsCameraReelsFill  size={42}/>
                </NavLink>

                <h3>Upcoming Shows</h3>
            </div>

            <div className={styles.add_movie}>
                <NavLink to="/upcoming-movies" style={{cursor: "pointer"}} >
                <PiFilmReelFill  size={52}/>
                </NavLink>

                <h3>Upcoming Movies</h3>
            </div>


        </div>
     </div>
     </>
  )
}

export default Dashboard