import { combineReducers } from 'redux';
import postsReducer from './postsReducer.js';
import usersReducer from './usersReducer.js';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});


// can use dummy reducers initially to get applications running--ex:

// export default combineReducers({
//     replaceMe: () => 'hi there'
// });