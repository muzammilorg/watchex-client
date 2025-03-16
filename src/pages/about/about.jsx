import React from 'react'
import banner from '../../assets/banner/banner-about.jpg'
import styles from './about.module.scss'
import PageLayout from '../../components/Layouts/page-layout'

const AboutPage = () => {
  return (
    <>
    <PageLayout>
    <div className={styles.about_main}>
    <div className={`${styles.about_container}`}>
        <div className={`${styles.about_content}`}>
            <h2 className='text-center text-light mt-4'>About Us</h2>
                <p className='mt-4'>
                Welcome to Watchex, where every movie is an event! As leaders in the cinematic experience, we're thrilled to bring you cutting-edge technology and unparalleled viewing pleasure. Here's what sets us apart:
                </p>

                <h3 className='text-center text-light mt-4'>Our Cutting-Edge Technology
                </h3>

                <p>
               <b>Laser Projection Technology:</b> Elevate your movie-watching with stunning clarity, vibrant colors, and incredible brightness. Our state-of-the-art laser projectors ensure every frame is as lifelike as possible.
<br />
<br />
<b>1570 Film Projector:</b> Experience the nostalgia and unmatched quality of traditional film projection. Our 1570 film projectors deliver crisp images and unparalleled depth, capturing every detail on the big screen.
<br />
<br />

<b>Screen Size:</b> Immerse yourself in movies on our enormous screens, designed to make every viewing larger-than-life. Whether you're seated in the front row or the back, our screens offer a seamless visual experience.
<br />
<br />

<b>Theatre Geometry:</b> Our theatres are meticulously designed with optimal geometry to provide the best sightlines and acoustics. This ensures every seat in the house offers a perfect view and exceptional sound quality.
<br />
<br />

<b>Digital Remastering (DMR):</b> Enjoy movies that have been digitally remastered for the highest quality. Our DMR process enhances picture and sound, bringing you closer to the director's vision.
<br />
<br />

<b>3D:</b> Dive into a new dimension with our advanced 3D technology. Feel the action come to life, making you part of the story with stunning depth and realism.
                </p>
        </div>

</div>


    </div>


    </PageLayout>
    </>
  )
}

export default AboutPage