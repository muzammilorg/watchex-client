import React from 'react'
import styles from './loader.module.scss'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
  return (
    <>
    <div className={`${styles.loader_container} d-flex justify-content-center align-items-center`}>
    <ClipLoader size={"95px"} color='#8f5eac' />
    </div>
    </>
  )
}

export default Loader