import {configureStore} from '@reduxjs/toolkit'

// reducers
// users reducers
import usersReducer from './features/users/usersSlice'
// weather
import weatherReducer from './features/weather/weatherSlice'

// store
export const store = configureStore({
    reducer: {
        users: usersReducer,
        weather: weatherReducer,
    }
})