import {configureStore} from '@reduxjs/toolkit'

// reducers
// users reducers
import usersReducer from './features/users/usersSlice'

// store
export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})