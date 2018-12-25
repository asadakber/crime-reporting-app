import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import addReducer from './add.reducer';
import feedbackReducer from './feedback.reducer';

export default combineReducers({
    root: authReducer,
    add: addReducer,
    feed: feedbackReducer
})