import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSeats: [],
  showTimeId: '',
  movieTitle: '',
  cinemaHall: '',
  formattedShowTime: '',
  poster: '',
  ticketPrice: 0,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedSeats: (state, action) => {
      state.selectedSeats = action.payload;
    },
    setShowTimeDetails: (state, action) => {
        const { showTimeId, movieTitle, cinemaHall, formattedShowTime,  poster } = action.payload;
        state.showTimeId  = showTimeId;
        state.movieTitle = movieTitle;
        state.cinemaHall = cinemaHall;
        state.formattedShowTime = formattedShowTime;
        state.poster = poster;


    },
    setTicketPrice: (state, action) => {
      state.ticketPrice = action.payload;
    },
    resetBooking: (state) => {
      state.selectedSeats = [];
      state.showTimeId = '',
      state.movieTitle = '';
      state.cinemaHall  = '';
      state.formattedShowTime  = '';
      state.poster  = '';
      state.ticketPrice = 0;
    },
  },
});

export const { setSelectedSeats, setShowTimeDetails, setTicketPrice, resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
