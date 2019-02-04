import jsonPlaceholder from '../apis/jsonPlaceHolder.js';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response})
    };
};