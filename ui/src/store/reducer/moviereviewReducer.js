import * as actionTypes from "../moviereviewActionTypes";

const initialstore = {
    mreviews:[],
    loading:false,
    error:""
}

const store = (state = initialstore , action) => {
    switch (action.type) {
        case actionTypes.INIT_FETCH_MOVIEWREVIEW:
            return {
                ...state,
                loading:true
            }
            break;
        case actionTypes.FETCH_MOVIEREVIEW_SUCESS:
            return{
                ...state,
                loading:false,
                mreviews:action.mreviews
            }
        case actionTypes.FETCH_MOVIEREVIEW_FAILED:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        case actionTypes.INIT_ADD_MOVIEWREVIEW:
                return {
                    ...state,
                    loading:true
                }
                break;
            case actionTypes.ADD_MOVIEREVIEW_SUCESS:
                return{
                    ...state,
                    loading:false,
                    mreviews:action.mreviews
                }
            case actionTypes.ADD_MOVIEREVIEW_FAILED:
                return{
                    ...state,
                    loading:false,
                    error:action.error
                }
        default:
            return state;
    }
}

export default store;