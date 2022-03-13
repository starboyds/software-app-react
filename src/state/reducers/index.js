import {combineReducers} from 'redux';
import collectionReducer from './collectionReducer';
import reviewReducer from './reviewReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
    currentUser: userReducer,
    userCollection: collectionReducer,
    softwareReviews: reviewReducer
});

export default reducers;