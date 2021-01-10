import * as actionTypes from "../allactiontypes/bookingActionTypes";
const initalstore = {
  bookings: [],
  loading: false,
  error: "",
};

const store = (state = initalstore, action) => {
  switch (action.type) {
    case actionTypes.INIT_FETCH_BOOKINGS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.bookings,
      };

    case actionTypes.FETCH_BOOKINGS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.INIT_FETCH_MBOOKINGS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_MBOOKINGS_SUCCESS:
        // console.log(istrue1);
        return {
          ...state,
          loading: false,
          bookings: action.bookings,
        };

    case actionTypes.FETCH_MBOOKINGS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.INIT_ADD_BOOKINGS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.ADD_BOOKINGS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default store;
