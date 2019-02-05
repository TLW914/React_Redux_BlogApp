import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceHolder.js';

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        //console.log('about to fetch posts');
        await dispatch(fetchPosts());
        //console.log('fetched posts!');
        //console.log(getState().posts);
       const userIds = _.uniq(_.map(getState().posts, 'userId'))
       //console.log(userIds)
       userIds.forEach((id)=> dispatch(fetchUser(id)));
    };
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    };
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        
        dispatch({ type: 'FETCH_USER', payload: response.data})
    };
};



//memoized version

// export const fetchUser = (id) => {
//     return (dispatch) => {
//         _fetchUser(id, dispatch);
//     }
// };

// //memoize userIds to reduce api calls
// const _fetchUser = _.memoize(async(id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//         dispatch( { type: 'FETCH_USER', payload: response.data });
// });