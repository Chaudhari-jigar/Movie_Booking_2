import * as actionTypes from '../theaterscreenActionType';
const initialstore = {
    tscreens:[],
    singletscreen:{},
    loading:false,
    error:""
}

const store = (state=initialstore,action)=>{
    switch(action.type)
    {
        case actionTypes.INIT_FETCH_THEATER_SCREEN:
            return{
                ...state,
                loading:true
            }
        case actionTypes.FETCH_SCREEN_THEATER_SUCCESS:
            console.log(action.theaterscreens);
            return{
                ...state,
                loading:false,
                tscreens:action.theaterscreens
            }
        case actionTypes.FETCH_SCREEN_THEATER_FAILED:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case actionTypes.INIT_ADD_THEATER_SCREEN:
            return{
                ...state,
                loading:true
            }
        case actionTypes.ADD_SCREEN_THEATER_SUCCESS:
            return{
                ...state,
                loading:false                  
            }
        case actionTypes.ADD_SCREEN_THEATER_FAILED:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        
        case actionTypes.INIT_DELETE_THEATER_SCREEN:
            return{
                ...state,
                loading:true
            }
        case actionTypes.DELETE_SCREEN_THEATER_SUCCESS:
            let tscreeens = state.tscreens.filter(tscren => tscren._id !== action.id);
            return{
                ...state,
                loading:false,           
                tscreens:tscreeens    
            }
        case actionTypes.DELETE_SCREEN_THEATER_FAILED:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case actionTypes.INIT_SINGLE_THEATER_SCREEN:
                return {
                    ...state,
                    loading: true,
                };
        case actionTypes.SINGLE_SCREEN_THEATER_SUCCESS:
                console.log(action.singletscreen)
                return {
                    ...state,
                    loading: false,
                    singletscreen: action.singletscreen
                }
        case actionTypes.SINGLE_SCREEN_THEATERFAILED:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                }
        case actionTypes.INIT_UPDATE_THEATER_SCREEN:
                    return {
                        ...state,
                        loading: true,
                    };
        case actionTypes.UPDATE_SCREEN_THEATER_SUCCESS:
                    console.log(action.tscreens);
                    let tscreensTemp1 = [...state.tscreens];
                    tscreensTemp1.map(order => {
                        if (order._id === action.tscreens._id) {
                                order.user_id = action.tscreens.user_id;
                                order.movie_id = action.tscreens.movie_id;
                                order.screen_id = action.tscreens.screen_id;
                                order.start_date = action.tscreens.start_date;
                                order.end_date = action.tscreens.end_date;
                                order.screen_time = action.tscreens.screen_time;
                                order.end_time = action.tscreens.end_time;
                        }
                    });
                    return {
                        ...state,
                        loading: false,
                        tscreens: tscreensTemp1
                    }
        case actionTypes.UPDATE_SCREEN_THEATER_FAILED:
                    return {
                        ...state,
                        loading: false,
                        error: action.error
                    }
     
        default:
            return state;
    }
}

export default store;