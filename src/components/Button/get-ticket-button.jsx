import React from 'react'
import styles from './get-ticket-button.module.scss'

const GetTicketButton = ({children}) => {
    return (
        <>
            <button className={` ${styles.ticket_button} ` }>{children}</button>

        </>
    )
}

export default GetTicketButton