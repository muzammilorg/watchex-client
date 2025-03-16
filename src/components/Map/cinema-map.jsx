import React from 'react'
import styles from './cinema-map.module.scss'

const CinemaMap = ({children}) => {
  return (
  
        <>

          <div className={`${styles.single_seat}`}>
          {children}
          </div>
        
        
        </>
  
  
  )
}

export default CinemaMap