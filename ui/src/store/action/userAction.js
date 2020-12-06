import axios from "axios";
import * as actionTypes from "../userActionTypes";

export const fetchusersdata = () =>{
    return async(dispatch)=>{
        dispatch({
            type:actionTypes.INIT_FETCH_USER
        })
        await axios.get("http://localhost:3001/getusers").then(res => {
            // console.log(res.data);
            dispatch({
                type:actionTypes.FETCH_USER_SUCCESS,
                users:res.data
            })
        }).catch(error=>{
            dispatch({
                type:actionTypes.FETCH_USER_FAILED,
                error1:error.message
            })
        });        
    }
}

export const adduserdata = (postdata) =>{
    return async(dispatch)=>{
        dispatch({
            type:actionTypes.INIT_ADD_USER
        })
        await axios.post("http://localhost:3001/adduser",postdata).then(res => {
            dispatch({
                type:actionTypes.ADD_USER_SUCCESS,
                users:res.data
            })
        }).catch(error=>{
            dispatch({
                type:actionTypes.ADD_USER_FAILED,
                error1:error.message
            })
        });    
    }
}

// export const deletecitiesdata = (id) =>{
//     console.log(id);
//     return async(dispatch)=>{
//         dispatch({
//             type:actionTypes.INIT_DELETE_CITIES
//         })
//         await axios.delete(`http://localhost:3001/deletecities/${id}`).then(res => {
//             dispatch({
//                 type:actionTypes.DELETE_CITIES_SUCCESS,
//                 id:id
//             })
//         }).catch(error=>{
//             dispatch({
//                 type:actionTypes.DELETE_CITIES_FAILED,
//                 error:error.message
//             })
//         });    
//     }
// }

// export const singlecitiesDataFetch = (id) =>{
//     return async(dispatch)=>{
//         dispatch({
//             type:actionTypes.INIT_SINGLE_CITIES
//         })
//         await axios.get(`http://localhost:3001/singlecities/${id}`).then(res => {
//             // console.log(res.data);
//             dispatch({
//                 type:actionTypes.SINGLE_CITIES_SUCCESS,
//                 singlecities:res.data
//             })
//         }).catch(error=>{
//             dispatch({
//                 type:actionTypes.SINGLE_CITIES_FAILED,
//                 error:error.message
//             })
//         });    
//     }
// }   

// export const updatecitiesdata = (id,put) =>{
//     return async(dispatch)=>{
//         dispatch({
//             type:actionTypes.INIT_UPDATE_CITIES
//         })
//         await axios.put(`http://localhost:3001/updatecities/${id}`,put).then(res => {
//             // console.log(res.data);
//             dispatch({
//                 type:actionTypes.UPDATE_CITIES_SUCCESS,
//                 cities:res.data
//             })
//         }).catch(error=>{
//             dispatch({
//                 type:actionTypes.UPDATE_CITIES_FAILED,
//                 error:error.message
//             })
//         });    
//     }
// }   