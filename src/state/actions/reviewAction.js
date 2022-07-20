import {CREATE_REVIEW, GET_REVIEWS} from '../constants';

export const createReview = (data) => async(dispatch, getState) => {
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    }

    const res = await fetch(`/api/create-review`, requestOptions);
    const result = await res.json();

    dispatch({
        type: CREATE_REVIEW,
        payload: result
    })
}

export const getReviews = (id) => async(dispatch, getState) => {

    const res = await fetch(`/api/software-reviews/${id}`)
    const result = await res.json();

    dispatch({
        type: GET_REVIEWS,
        payload: result.reviews
    })

}