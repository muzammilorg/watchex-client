import React from 'react'
import styles from './home.module.scss'
import PageLayout from '../../components/Layouts/page-layout'
import HeroSlider from '../../components/Sliders/hero-slider'
import CardSlider from '../../components/Sliders/card-slider'
import Meal from '../../assets/banner/meal.png'
import Theater from '../../assets/banner/theater.jpeg'
import Watchex from '../../assets/logos/logo.png'
import { MdPhone } from "react-icons/md";
import UpcomingCardSlider from '../../components/Sliders/upcoming-card-slider'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <PageLayout>


        <div className={`${styles.home} container-fluid no-gutter`}>
          <HeroSlider></HeroSlider>
          </div>
          <div className={`${styles.home_showtime_container}`}>
            <div className={`${styles.now_showing} d-flex justify-content-between align-items-center`}>
              <h2>Now Showing</h2>
              <span><NavLink to={"/showtimes"}>View All</NavLink> </span>
            </div>
            <div className={`${styles.card_container}  d-flex justify-content-center align-items-center`}>
              <CardSlider></CardSlider>
            </div>
          </div>

          <div className={`${styles.home_showtime_container}`}>
            <div className={`${styles.now_showing} d-flex justify-content-between align-items-center`}>
              <h2>Upcoming</h2>
              <span>View All</span>
            </div>
            <div className={`${styles.card_container}  d-flex justify-content-center align-items-center`}>
              <UpcomingCardSlider></UpcomingCardSlider>
            </div>



          </div>
          <div className={`${styles.meal_container}`}>
            <img src={Meal} alt="" />

            <div className={`${styles.meal_content} p-2 d-flex flex-column justify-content-center align-items-center`}>
              <h3>
                Buy One Large Popcorn + One Large Pepsi
              </h3>

              <button className={`${styles.meal_button} mt-2`}>Up To 20% Off</button>
            </div>

          </div>

          <div className={`${styles.our_theater_container}`}>
            <div className={`${styles.theater_heading} pt-4 mx-auto d-flex justify-content-start align-items-center`}>
              <h2>Our Theater</h2>
            </div>

            <div className={`${styles.theater_video} mt-3 d-flex justify-content-center align-items-center`}>
              <iframe
                src={`https://www.youtube.com/embed/1ltQycMLO-4`}
              ></iframe>
            </div>
          </div>



          <div className={`${styles.about_container}`}>
            <img src={Theater} alt="" />

            <div className={`${styles.about_content} d-flex flex-column justify-content-center align-items-center`}>
              <p>At Watchex, we continuously work toward increasing sustainability in cinemas. Our five-step sustainability program brings a better customer experience and improves our operations. To increase sustainability, we recycle our trash, use nearby suppliers and energy-efficient lighting, provide an inclusive cinema experience, and work towards digital tickets. We invite our customers to join our sustainable efforts and recycle with us.</p>

              <img src={Watchex} alt="" />
            </div>

          </div>

          <div className={`${styles.findus_container}`}>
            <div className={`row g-0`}>
              <div className={`${styles.findus_content} text-sm-center order-first p-4 d-flex flex-column justify-content-center align-items-center col-lg-6 col-12`}>
                <div>
                  <h3 className={`${styles.findus_heading} text-sm-center `}>How to find us</h3>
                  <div>2365 Victory Park Lane
                  </div>
                  <div>Singapore, TX 75219
                  </div>
                </div>

                <div className={`${styles.phone}  mt-5 d-flex justify-content-start align-items-center  gap-5`}>
                  <MdPhone />
                  <p>214123456</p>
                </div>

                <button className={`${styles.location_button} mt-5 `}>
                  <NavLink to={"https://maps.google.com/maps/dir/Current+Location/1.350485,103.871619"} target="_blank"> Get Direction</NavLink>
                </button>
              </div>

              <div className={`${styles.findus_map} order-last p-lg-5  d-flex justify-content-center align-items-center col-lg-6 col-12`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807049.0044024787!2d102.718054946875!3d1.350485200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17a6c4817065%3A0xa003c41d42d20ef9!2sShaw%20Theatres%20NEX!5e1!3m2!1sen!2s!4v1733771286500!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

          </div>




      </PageLayout>

    </>
  )
}

export default Home