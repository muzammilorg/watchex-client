import React from 'react'
import styles from "./contact.module.scss";
import PageLayout from '../../components/Layouts/page-layout';
import Swal from 'sweetalert2';

const Contact = () => {

  const handleAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Thank You!",
      text: "Your message has been submitted",
      showConfirmButton: false,
      background: '#181c20',
      color: '#fff',
      iconColor: '#7fffd4'

    });
  }

  return (
    <>
      <PageLayout>
        <div className={styles.contact_main}>

            <h2 className='text-center text-light mt-5'>Contact Us</h2>
          <form action="" className={`${styles.contact_form} d-flex flex-column align-items-start `}>
           <div className={`${styles.input_container}`}>
           <label>Name</label>
           <input required className={`${styles.name_input} p-2 mt-1`} type="text" placeholder='Your Name' />
           </div>
            <div className={`${styles.input_container}`}>
            <label>Email</label>
            <input required className={`${styles.email_input} p-2 mt-1`} type="email" placeholder='Email' />
            </div>
           <div className={`${styles.input_container}`}>
           <label >Message</label>
           <textarea required className={`${styles.queries_input}`} placeholder='Your Message Here'></textarea>
           </div>
            <button onClick={handleAlert}>Submit</button>
          </form>


        </div>

      </PageLayout>
    </>
  )
}

export default Contact