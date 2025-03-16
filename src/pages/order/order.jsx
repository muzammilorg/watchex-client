import React, { useRef, useState } from 'react'
import styles from './order.module.scss'
import PageLayout from '../../components/Layouts/page-layout'
import OrderCard from '../../components/Cards/order-card'
import { useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../../services/constant'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'


const OrderPage = () => {
    const { id } = useParams();
    const [orderedShow, setOrderedShow] = useState([])


    console.log("ID Here", id);


    useEffect(() => {

        const fetchShow = async () => {

            const response = await axios.get(`${baseUrl}/booking/bookedshow/${id}`)
            setOrderedShow([response.data.data])


        }

        fetchShow()

    }, [])

    console.log("order show here => ", orderedShow);


    return (
        <>
            <div className={`${styles.order_container}`}>

            <div className={styles.nav_logo}>
            <NavLink to='/'>
                        <img src={logo} alt="watchex" className={`${styles.logo_img}`} />

                    </NavLink>
            </div>


                {orderedShow.length > 0 ? (
                    orderedShow.map((item, key) => (
                        <OrderCard
                            key={key}
                            year={item.showTime.movie.year}
                            genre={item.showTime.movie.genre}
                            runtime={item.showTime.movie.runtime}
                            title={item?.showTime?.movie?.title}
                            poster={item?.showTime?.movie?.poster}
                            cinema={item?.showTime.cinemaHall}
                            date={item.showTime.showTime}
                            seats={item.seats.join(", ")}
                            id={id}
                            amount={item.totalAmount}

                        />
                    ))
                ) : (
                    <p>No orders found</p>
                )}
            </div>


        </>
    )
}

export default OrderPage