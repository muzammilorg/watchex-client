import React, { useState } from 'react'
import styles from './checkout.module.scss'
import PageLayout from '../../components/Layouts/page-layout'
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { resetBooking } from '../../redux/features/booking.slice'
import { useEffect } from 'react';
import TextInput from '../../components/Inputs/text-input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../services/constant';

const Checkout = () => {

  const userData = useSelector(state => state.user.data)
  const navigate = useNavigate()  
  const bookingData = useSelector(state => state.booking)
  const [paymentStatus, setPaymentStatus] = useState(false)
  const dispatch = useDispatch()

  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryValidation, setExpiryValidation] = useState("")
  const [cardCVC, setCardCVC] = useState("")
  const [selectedSeats, setSelectedSeats] = useState()


  const seatLabels = bookingData.selectedSeats.map(seat => `${seat.row}${seat.column}`);

  

  const cardNumberInputHandler = (e) => {
    const inputValue = e.target.value;
    const onlyNumbers = inputValue.replace(/\D/g, '').slice(0, 16);

    setCardNumber(onlyNumbers);

  }


  const cardExpiryHandler = (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 4) return;

    if (value.length >= 3) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;

    };

    setExpiryValidation(value)
  }

console.log(bookingData.selectedSeats );


  const cvcHandler = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) return;

    setCardCVC(value)
  }


  const [hasBooking, setHasBooking] = useState(false)

  useEffect(() => {
    setHasBooking(bookingData.selectedSeats.length > 0)




  }, [bookingData])


  const handleRemove = () => {
    dispatch(resetBooking())
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (!cardName || !cardCVC || !cardNumber || !expiryValidation) {
        return alert("Payment Error Try Again")
      }

        const payload = {
          userId: userData._id,
          showtime: bookingData.showTimeId,
          seats: seatLabels,
          totalAmount: bookingData.ticketPrice
        }

        if (!payload) {
          return alert("Payload Error Try Again")
        }

        const response = await axios.post(`${baseUrl}/booking/add`, payload)
        
        if (response) {
          setCardName("")
          setCardNumber("")
          setExpiryValidation("")
          setCardCVC("")
          dispatch(resetBooking())
          setPaymentStatus(true)

          const orderId = response?.data?.data?._id;
          console.log("order id here =>",orderId);
          
          navigate(`/order/${orderId}`)
          
        }
        



    } catch (error) {
      console.log("error here =>",error);
      
    }
    


  }

  return (
    <>
      <PageLayout>
        <div className={`${styles.checkout_container}`}>
          <h2 className='text-light text-center'>Checkout</h2>
          {hasBooking ?
            <div className={`${styles.checkout_card}`}>
              <div className={`${styles.left}`}>
                <div className={`${styles.show_card}`}>



                  <img src={bookingData.poster} alt="" />
                  <div className={`${styles.show_details} mt-3`}>

                    <h3>{bookingData.movieTitle}</h3>
                    <div className={`${styles.movie_showtime_details}`}>
                      <p>{`Cinema: ${bookingData.cinemaHall}`}</p>
                    </div>

                    <div className={styles.showtime_details}>
                      <p>{bookingData.formattedShowTime}</p>
                      <p>{`Seats: x${bookingData.selectedSeats.length}`}</p>

                    </div>

                  </div>

                  <div className={styles.remove_show}>
                    <h3>{`$${bookingData.ticketPrice}`}</h3>

                  </div>
                  <MdCancel onClick={handleRemove} size={36} style={{ color: '#8f5eac', cursor: 'pointer' }} />

                </div>
              </div>

              <div className={`${styles.right}`}>

                <form className={styles.payment_form} onSubmit={handleSubmit}>
                  <h3 className='text-center text-light m-4'>Payment Details</h3>
                  <input type="text" placeholder='Full Name' value={cardName.toUpperCase()} onChange={(e) => setCardName(e.target.value)} />
                  <input type="text" placeholder='Card Number' value={cardNumber} onChange={cardNumberInputHandler} />
                  <input type="text" placeholder='Expiry' value={expiryValidation} onChange={cardExpiryHandler} />
                  <input type="password" placeholder='CVC' value={cardCVC} onChange={cvcHandler} />
                  <button type='submit' className={styles.checkout_button}>Pay Now</button>
                </form>
              </div>
            </div>
            :
            <h3 className='text-center text-light mt-5'>No Data to Show</h3>
          }
        </div>
      </PageLayout>

    </>
  )
}

export default Checkout