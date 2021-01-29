import axios from "axios";
import * as actionTypes from "../moviereviewActionTypes";

export const fetchreview = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.INIT_FETCH_MOVIEWREVIEW,
    });

    await axios
      .get(`http://localhost:3001/getmoviereview/${id}`)
      .then((res) => {
          console.log(res.data);
        dispatch({
          type: actionTypes.FETCH_MOVIEREVIEW_SUCESS,
          mreviews: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCH_MOVIEREVIEW_FAILED,
          error: error.message,
        });
      });
  };
};

export const addmoviereview = (postdata) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.INIT_ADD_MOVIEWREVIEW,
    });
    await axios
      .post("http://localhost:3001/addmoviereview",postdata)
      .then((res) => {
        dispatch({
          type: actionTypes.ADD_MOVIEREVIEW_SUCESS,
          mreviews: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.ADD_MOVIEREVIEW_FAILED,
          error: error.message,
        });
      });
  };
};
