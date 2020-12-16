import axios from "axios";
import * as actionTypes from "../userActionTypes";

export const fetchusersdata = () =>{
    return async(dispatch)=>{
        dispatch({
            type:actionTypes.INIT_FETCH_USER
        })
        await axios.get("http://localhost:3001/getusers").then(res => {
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

export const login = (email,password) =>{
    return async(dispatch)=>{
        dispatch({
            type:actionTypes.INIT_SINGLE_LOGIN
        })
        await axios.get(`http://localhost:3001/login/${email}/${password}`).then(res => {
            console.log(res.data);
            dispatch({
                type:actionTypes.SINGLE_LOGIN_SUCCESS,
                token:res.data.token,
                singleuser:res.data.user
            })
            localStorage.setItem("Token",res.data.token);
        }).catch(error=>{
            dispatch({
                type:actionTypes.SINGLE_LOGIN_FAILED,
                error1:error.message
            })
        });    
    }
}

export const autoCheckLogin = () =>{
    return async(dispatch)=>{
        let verifytoken= localStorage.getItem("Token");
        console.log(verifytoken);
        dispatch({
            type:"VerifyToken",
            token:verifytoken
        })   
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


// LoginPage
// stateProp = user, error, loading
        // if(loading) > show loadr
        // if(user && !error) redirect("home")
        // if(error) > show error
 // dispatchProp = loginuser

// loginuser <== email, password
// dispatch => init_login => loading = true
    // axios => URL & Email, Password
        // <= user, token
        // reducer state
            // Success  => (dispatch) => loading=false, user = user, token = token
                // localstorage.setItem("token", token);
            // Failed => (dispatch) => Loading = false, error = error
