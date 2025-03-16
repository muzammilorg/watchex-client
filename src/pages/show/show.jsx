import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from './show.module.scss';
import PageLayout from '../../components/Layouts/page-layout';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../services/constant';
import { useDispatch } from 'react-redux';
import { setSelectedSeats, setShowTimeDetails, setTicketPrice} from '../../redux/features/booking.slice'

const Show = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [movieData, setMovieData] = useState([]);
  const [selectedSeats, setSelectedSeatsLocal] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
        setIsLoading(true)

      try {
        const response = await axios.get(`${baseUrl}/show/showtime/${id}`);
        setMovieData(response.data.data);
        console.log('show data --->', response.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false)
    };

    fetchMovie();
  }, []);

  const formattedRuntime = `${Math.floor(movieData?.movie?.runtime.split(" ")[0] / 60)}h ${movieData?.movie?.runtime.split(" ")[0] % 60}m`;
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

  const groupSeats = (seats) => {
    return seats.reduce((acc, seat) => {
      if (!acc[seat.row]) {
        acc[seat.row] = [];
      }

      acc[seat.row].push(seat);

      return acc;
    }, {});
  };

  const seatRows = movieData?.seats ? groupSeats(movieData.seats) : {};

  const handleSeatClick = (seat) => {
    if (seat.status === 'reserved') return;


    setSelectedSeatsLocal((prev) => {
      const isSelected = prev.find((s) => s._id === seat._id);

      if (isSelected) {
        return prev.filter((s) => s._id !== seat._id);
      } else if (prev.length < 5 ){
        return [...prev, seat];

      } else if (prev.length >= 5){
         alert("You Can Select 5 Seats At A Time");
        return prev

      } 
        
    


    });
  };

  const handleContinue = () => {

    const formattedShowTime = formatDateAndTime(movieData?.showTime);
    

    dispatch(setSelectedSeats(selectedSeats));
    dispatch(setShowTimeDetails({
      showTimeId: movieData?._id,
      movieTitle: movieData?.movie?.title,
      cinemaHall: movieData?.cinemaHall,
      poster: movieData?.movie?.poster,
      formattedShowTime,

    }));
    dispatch(setTicketPrice(movieData?.ticketPrice * selectedSeats.length));
    navigate('/checkout');
  }

  if (!movieData) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <PageLayout>
      <div className={`${styles.show_container}`}>
        <div className={`${styles.left}`}>
          <div className={`${styles.movie_details}`}>
            <div className={`${styles.movie_poster}`}>
              <img src={movieData?.movie?.poster} alt="" />
            </div>
            <div className={`${styles.movie_content}`}>
              <h3>{movieData?.movie?.title}</h3>
              <div className={`${styles.movie_tags}`}>
                <p>{`${movieData?.movie?.year} • ${`${movieData?.movie?.genre.split(", ").slice(0, 2).join("/")}`} • ${formattedRuntime}`}</p>
                <Rating
                  readonly={true}
                  className={styles.custom_rating}
                  style={{ margin: 0, padding: 0 }}
                  allowFraction={true} size={18}
                  initialValue={movieData?.movie?.ratings?.find(rating => rating.Source === "Internet Movie Database")?.Value.split('/')[0] / 2} />
              </div>
              <p>{movieData?.movie?.plot}</p>

              <div className={`${styles.cinema}`}>
                <span>Cinema</span>
                <h4>{movieData?.cinemaHall}</h4>
              </div>
            </div>
          </div>

          <div className={`${styles.movie_options}`}>
            <h4>Buy Tickets</h4>
            <div className={`${styles.showon} d-flex justify-content-center align-items-center`}>
              <p>{formatDateAndTime(movieData?.showTime)}</p>
            </div>

            <div className={`${styles.selected_seats_container}`}>
              <p><span>Selected Seats:</span></p>
              <div className={`${styles.selected_seats}`}>
               {selectedSeats.map(seat => (
                <span key={seat._id} className={`${styles.selected_single_seat}`}>{`${seat.row}${seat.column}`}</span> ) || '')}
            </div>
            </div>

            <div className={styles.payment_options}>
              <p>${movieData.ticketPrice * selectedSeats.length}</p>
              {selectedSeats >= 0 ?
                            <button>Select Seats</button>
                            :
                            <button onClick={handleContinue}><NavLink to={'/checkout'}>Continue</NavLink></button>

              }
            </div>
          </div>
        </div>

        <div className={`${styles.right}`}>
          <div className={`${styles.cinema_map_container}`}>
            <div className={styles.screen_container}>
              <div className={styles.screen}></div>
            </div>

            {Object.keys(seatRows).map((rowKey) => (
              <div key={rowKey} className={styles.seat_row}>
                <span className={styles.row_label}>{rowKey}</span>
                <div className={styles.seats_container}>
                  {seatRows[rowKey].map((seat) => (
                    <div
                      key={seat._id}
                      className={`${styles.seat} ${seat.status === 'reserved' ? styles.reserved : styles.available}`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      <p>{`${seat.row}${seat.column}`}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className={`${styles.seat_guide}`}>

              <div className={styles.seat_guide_container}>Available <span className={styles.available_seat_guide}></span></div>
              <div className={styles.seat_guide_container}>Selected <span className={styles.selected_seat_guide}></span></div>
              <div className={styles.seat_guide_container}>Reserved <span className={styles.reserved_seat_guide}></span></div>

             
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
    </>
  );
};

export default Show;
