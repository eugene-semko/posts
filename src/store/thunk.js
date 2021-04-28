import {fetchPosts, fetchPostsError, fetchPostsSuccess} from './postsReducer'
import {API} from '../api/index'
export const getPostsThunk = () => {
    return async (dispatch) => {
        try {
            dispatch({type: fetchPosts})
            const response = await API.get('/posts')
            dispatch({type: fetchPostsSuccess, payload: response.data})
        } catch (e) {
            dispatch({
                type:fetchPostsError,
                payload: 'Произошла ошибка'
            })
        }
    }
}
