import { combineReducers } from 'redux';
import postsReducer from '/postsReducer.js';

export default combineReducers({
    posts: postsReducer
});


// can use dummy reducers initially to get applications running--ex:

// export default combineReducers({
//     replaceMe: () => 'hi there'
// });