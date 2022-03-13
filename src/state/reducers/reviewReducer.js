import {CREATE_REVIEW, GET_REVIEWS} from '../constants';

const initialState = {
    reviews: []
}

const reviewReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            }
        case GET_REVIEWS:
            return {
                ...state,
                reviews: [...action.payload]
            }
        default:
            return state;
    }
}

export default reviewReducer;