import * as actionTypes from "../userActionTypes";
const initalstore ={
    users:[],
    singleuser:{},
    loading:false,
    error1:"",
}

const store = (state = initalstore,action) =>{
    switch(action.type){
        case actionTypes.INIT_FETCH_USER:
            return{
                ...state,
                loading:true,
            }
        case actionTypes.FETCH_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.users
            }

        case actionTypes.FETCH_USER_FAILED:
            return{
                ...state,
                loading:false,
                error1:action.error1,
            }
        case actionTypes.INIT_ADD_USER:
                    return{
                        ...state,
                        loading:true,
                    };
        case actionTypes.ADD_USER_SUCCESS:

                return{
                    ...state,
                    loading:false                  
                }
        case actionTypes.ADD_USER_FAILED:
                return{
                    ...state,
                    loading:false,
                    error1:action.error1
                }
        case actionTypes.INIT_DELETE_USER:
                    return{
                        ...state,
                        loading:true,
    
                    };
        case actionTypes.DELETE_USER_SUCCESS:
                let usert = state.users.filter(statese => statese._id !== action.id);
                // let studentst = state.states.filter(student => student._id !== action.id);
                return{
                    ...state,
                    loading:false,   
                    users:usert,
                }
        case actionTypes.DELETE_USER_FAILED:
                return{
                    ...state,
                    loading:false,
                    error1:action.error1
                }
        case actionTypes.INIT_SINGLE_USER:
                    return{
                        ...state,
                        loading:true,    
                    };
        case actionTypes.SINGLE_USER_SUCCESS:
            // console.log(ac)
                return{
                    ...state,
                    loading:false, 
                    singleuser:action.singleuser             
                }
        case actionTypes.SINGLE_USER_FAILED:
                return{
                    ...state,
                    loading:false,
                    error1:action.error1
                }
        case actionTypes.INIT_UPDATE_USER:
                    return{
                        ...state,
                        loading:true,
                    };
        case actionTypes.UPDATE_USER_SUCCESS:
                // let statesst = [...state.users];
                // statesst.map(order => {
                //     if(order._id === action.USER._id)
                //     {
                //         order.city_name = action.users.city_name
                //         order.state_id = action.users.state_id;
                //     }
                // });  
                // console.log(action.USER.state_id);          
                return{
                    ...state,
                    loading:false, 
                    // USER:statesst
                }
        case actionTypes.UPDATE_USER_FAILED:
                return{
                    ...state,
                    loading:false,
                    error1:action.error1
                }
            default :
                return state;
    }
}

export default store;