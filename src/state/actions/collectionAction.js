import { ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION, GET_COLLECTION, REMOVE_COLLECTIONS } from "../constants";

export const addToCollection = (data) => async(dispatch, getState) => {
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    }

    const res = await fetch(`http://localhost:3001/api/collection/create`, requestOptions);
    const result = await res.json();

    dispatch({
        type: ADD_TO_COLLECTION,
        payload: result.collection
    })
}

export const getUserCollection = (id) => async(dispatch, getState) => {

    const res = await fetch(`http://localhost:3001/api/collection/${id}`)
    const result = await res.json();

    dispatch({
        type: GET_COLLECTION,
        payload: result.collections
    })

}

export const removeFromCollection = (softwareId) => async(dispatch, getState) => {

    const res = await fetch(`http://localhost:3001/api/collection/${softwareId}`, { method: 'DELETE' })

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