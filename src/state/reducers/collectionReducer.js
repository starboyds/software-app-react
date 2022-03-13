import { ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION, GET_COLLECTION, REMOVE_COLLECTIONS } from "../constants";

const initialState = {
    collections: []
};

const collectionReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COLLECTION:
            return {
                ...state,
                collections: action.payload
            }
        case ADD_TO_COLLECTION:
            return {
                ...state,
                collections: [...state.collections, action.payload ]
            }
        case REMOVE_FROM_COLLECTION:
            return {
                ...state,
                collections: [...state.collections.filter((e) => e.softwareId !== action.payload)]
            }
        case REMOVE_COLLECTIONS: 
            return {
                ...state,
                collections: []
            }
        default:
            return state;
    }
}

export default collectionReducer;