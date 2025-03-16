import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/user.slice";
import bookingReducer from "./features/booking.slice";


const rootReducer = combineReducers({
    user: userReducer,
    booking: bookingReducer
})


export default rootReducer;