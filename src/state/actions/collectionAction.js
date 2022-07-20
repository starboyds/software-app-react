import { ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION, GET_COLLECTION, REMOVE_COLLECTIONS } from "../constants";

export const addToCollection = (data) => async(dispatch, getState) => {
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-type': 'application/json', 'x-access-token': localStorage.getItem('x-access-token') },
        body: JSON.stringify(data)
    }

    const res = await fetch(`/api/collection/create`, requestOptions);
    const result = await res.json();

    dispatch({
        type: ADD_TO_COLLECTION,
        payload: result.collection
    })
}

export const getUserCollection = (id) => async(dispatch, getState) => {

    const res = await fetch(`/api/collection/${id}`, {
        headers: {
            'Content-Type' : 'applications/json',
            'x-access-token': localStorage.getItem('x-access-token')
        }
    })
    const result = await res.json();

    dispatch({
        type: GET_COLLECTION,
        payload: result.collections
    })

}

export const removeFromCollection = (softwareId) => async(dispatch, getState) => {

    const res = await fetch(`/api/collection/${softwareId}`, { method: 'DELETE', 
        headers: {
            'Content-Type' : 'applications/json',
            'x-access-token': localStorage.getItem('x-access-token')
        } 
    })

    dispatch({
        type: REMOVE_FROM_COLLECTION,
        payload: softwareId
    })
}

export const removeCollections = () => async(dispatch, getState) => {

    dispatch({
        type: REMOVE_COLLECTIONS
    })
}