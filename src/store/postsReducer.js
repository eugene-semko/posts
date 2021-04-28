import { createAction, createReducer } from "@reduxjs/toolkit";

export const fetchPosts = createAction('FETCH_POSTS')
export const fetchPostsSuccess = createAction('FETCH_POSTS_SUCCESS')
export const fetchPostsError = createAction('FETCH_POSTS_ERROR')

const initialState = {
    posts: [],
    loading: false,
    error: null
}

export default createReducer(initialState, {
    [fetchPosts]: (state) => {
        state.loading = true
        state.error = null
        state.posts = []
    },
    [fetchPostsSuccess]: (state, action) => {
        state.loading = false
        state.error = null
        state.posts = action.payload
    },
    [fetchPostsError]: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.posts = []
    }
})

export const postsReducerSelector = {
    getData: state => state.postsReducer
  }
