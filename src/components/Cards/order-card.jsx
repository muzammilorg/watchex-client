import React, { useRef } from 'react'
import styles from './movie-card.module.scss'
import poster from '../../assets/banner/avengers.jpg'
import Barcode from 'react-barcode'

const OrderCard = (props) => {

    const printRef = useRef(null);

    const formatDateAndTime = (movieTime) => {
        const date = new Date(movieTime);
      
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getFullYear();
      
        const time = date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
      
        return `${day}, ${month}, ${year} at ${time}`;
      };


      const formatRuntimeHour = Math.floor(props.runtime.split(" ")[0] / 60)
      const formatRuntimeMin = Math.floor(props.runtime.split(" ")[0] % 60)

      const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <div className={`${styles.order_card} `}  ref={printRef}>


                <div className={`${styles.order_details}`}>
                    <div className={`${styles.movie_content}`}>
                        <img src={props.poster} alt="" />

                        <div className={`${styles.movie_details}`}>
                            <h3>{props.title}</h3>
                            <p>{props.year} • {props.genre.split(", ").join("/")} • {`${formatRuntimeHour}h ${formatRuntimeMin}m`}</p>

                        </div>
                    </div>

                    <div className={`${styles.show_details}`}>
                    <p>Cinema: {props.cinema}</p>
                    <p>Date: {formatDateAndTime(props.date)}</p>
                    <p>Seats: {props.seats}</p>
                    <p>Ticket: #{props.id}</p>
                    <p>Amount: ${props.amount}</p>
                    

                    <div className={styles.barcode_container}>
                    <Barcode value={props.id} height={50} lineColor='#181c20' displayValue={false} />
                    </div>
                
                   <div className={styles.button_container}>
                   <button onClick={handlePrint} className={styles.print_button}>
                        Print Order
                    </button>
                   </div>
                
</div>
                </div>

               

            </div>
        </>
    )
}

export default OrderCard