import {SET_USER, REMOVE_USER} from '../constants';

export const setUser = (data) => (dispatch, getState) => {
    dispatch({
        type: SET_USER,
        payload: data
    })
}

export const removeUser = () => (dispatch, getState) => {
    dispatch({
        type: REMOVE_USER,
    })
}