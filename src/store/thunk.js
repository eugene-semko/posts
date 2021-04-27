import axios from 'axios'
import {fetchUsers, fetchUsersError, fetchUsersSuccess} from './postsReducer'

export const getPostsThunk = () => {
    return async (dispatch) => {
        try {
            dispatch({type: fetchUsers})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({type: fetchUsersSuccess, payload: response.data})
        } catch (e) {
            dispatch({
                type:fetchUsersError,
                payload: 'Произошла ошибка'
            })
        }
    }
}
