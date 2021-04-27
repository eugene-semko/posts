import { createAction, createReducer } from "@reduxjs/toolkit";

export const fetchUsers = createAction('FETCH_USERS')
export const fetchUsersSuccess = createAction('FETCH_USERS_SUCCESS')
export const fetchUsersError = createAction('FETCH_USERS_ERROR')

const initialState = {
    users: [],
    loading: false,
    error: null
}

export default createReducer(initialState, {
    [fetchUsers]: (state) => {
        state.loading = true
        state.error = null
        state.users = []
    },
    [fetchUsersSuccess]: (state, action) => {
        state.loading = false
        state.error = null
        state.users = action.payload
    },
    [fetchUsersError]: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.users = []
    }
})