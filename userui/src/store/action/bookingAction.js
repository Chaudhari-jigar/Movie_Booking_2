import axios from "axios";
import * as actionTypes from "../allactiontypes/bookingActionTypes";

export const getbooking = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.INIT_FETCH_BOOKINGS,
    });
    try {
      let response = await axios.get("http://localhost:3001/getbookings");
      console.log(response.data);
      dispatch({
        type: actionTypes.FETCH_BOOKINGS_SUCCESS,
        bookings: response.data,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: actionTypes.FETCH_BOOKINGS_FAILED,
        error: error.message,
      });
      throw new Error();
    }
  };
};

export const getmbooking = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.INIT_FETCH_MBOOKINGS,
    });
    try {
      let response = await axios.get(`http://localhost:3001/getmoviebooking/${id}`);
      console.log(response.data);
      dispatch({
        type: actionTypes.FETCH_MBOOKINGS_SUCCESS,
        bookings: response.data,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: actionTypes.FETCH_MBOOKINGS_FAILED,
        error: error.message,
      });
      throw new Error();
    }
  };
};

export const addbooking = (postdata) => {
  console.log(postdata);
  return async (dispatch) => {
    console.log(postdata);
    dispatch({
      type: actionTypes.INIT_ADD_BOOKINGS,
    });
    try {
      let response = await axios.post(
        "http://localhost:3001/addbookings",
        postdata
      );
      dispatch({
        type: actionTypes.ADD_BOOKINGS_SUCCESS,
        bookings: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_BOOKINGS_FAILED,
        error: error.response.data.message,
      });
      throw new Error();
    }
  };
};
