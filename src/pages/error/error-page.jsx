import React from 'react'
import PageLayout from '../../components/Layouts/page-layout';
import styles from './error-page.module.scss'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <PageLayout>
<div className={styles.error_page_container}>
  <div className={styles.error_content}>
  <h1 className='text-center'>Error 404</h1>
  <p>Requesting page not found.</p>
  <button> <NavLink to={'/'}>Back to Homepage</NavLink></button>

  </div>

</div>

    </PageLayout>


    
    </>
  )
}

export default ErrorPage;