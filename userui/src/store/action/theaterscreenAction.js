import axios from 'axios';
import * as actionTypes from '../theaterscreenActionType';

export const gettscreen = () => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.INIT_FETCH_THEATER_SCREEN
        })
        try {
            let response = await axios.get("http://localhost:3001/gettscreen")
            console.log(response.data);
            dispatch({
                type: actionTypes.FETCH_SCREEN_THEATER_SUCCESS,
                theaterscreens: response.data
            })
        } catch (error) {
            console.log(error.message);
            dispatch({
                type: actionTypes.FETCH_SCREEN_THEATER_FAILED,
                error: error.message
            });
            throw new Error();
        }
    }
}

export const addtscreen = (postdata) =>{
    return async(dispatch)=>{
        dispatch({
            type:actionTypes.INIT_ADD_THEATER_SCREEN
        })
        try
        {
            let response = await axios.post("http://localhost:3001/addtscreen",postdata)
            dispatch({
                type:actionTypes.ADD_SCREEN_THEATER_SUCCESS,
                theaterscreens:response.data
            })
        }
        catch(error)
        {
            dispatch({
                type:actionTypes.ADD_SCREEN_THEATER_FAILED,
                error:error.response.data.message
            });
            throw new Error();
        }
    }
}

export const deletetscreen = (id) => {
    console.log(id);
    return async (dispatch) => {
        dispatch({
            type: actionTypes.INIT_DELETE_THEATER_SCREEN
        })
        try {
            let response = await axios.delete(`http://localhost:3001/deletetscreen/${id}`)
            dispatch({
                type: actionTypes.DELETE_SCREEN_THEATER_SUCCESS,
                id: id
            })
        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: actionTypes.DELETE_SCREEN_THEATER_FAILED,
                error: error.response.data.message
            });
            throw new Error();
        }
    }
}

export const singletscreenrecord = (id) => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.INIT_SINGLE_THEATER_SCREEN
        })
        try {
            let response = await axios.get(`http://localhost:3001/singletscreen/${id}`)
            dispatch({
                type: actionTypes.SINGLE_SCREEN_THEATER_SUCCESS,
                singletscreen: response.data
            })
        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: actionTypes.SINGLE_SCREEN_THEATERFAILED,
                error: error.response.data.message
            });
            throw new Error();
        }
    }
}

export const updatetscreen = (id, put) => {
    console.log(put);
    return async (dispatch) => {
        dispatch({
            type: actionTypes.INIT_UPDATE_THEATER_SCREEN
        })
        try {
            let response = await axios.put(`http://localhost:3001/updatetscreen/${id}`, put)
            dispatch({
                type: actionTypes.UPDATE_SCREEN_THEATER_SUCCESS,
                tscreens: response.data
            })
        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: actionTypes.UPDATE_SCREEN_THEATER_FAILED,
                error: error.response.data.message
            });
            throw new Error();
        }
    }
} 