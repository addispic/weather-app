import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
    weatherData: null,
    isLoading: false,
    error: ""
}

// get initial data
export const getCityWeatherData = createAsyncThunk('weather/getCityWeatherData', async data => {
    console.log(data)
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=${import.meta.env.VITE_WF_ID}`)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// weather slice
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            // cases
            // get wither data
            // pending
            .addCase(getCityWeatherData.pending, state => {
                state.isLoading = true
            })
            // fulfilled
            .addCase(getCityWeatherData.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.isLoading = false
                if(action.payload?.name){
                    state.weatherData = {cityName: action.payload.name, temp: Math.floor(action.payload.main.temp),minTemp: action.payload.main.temp_min,maxTemp: action.payload.main.temp_max,humidity: action.payload.main.humidity,windSpeed: action.payload.wind.speed}
                    state.error = ""
                }
                if(action.payload?.message === "city not found"){
                    state.weatherData = null
                    state.error = "CITY_NOT_FOUND"
                }
            })
            // rejected
            .addCase(getCityWeatherData.rejected, state => {
                state.weatherData = null
                    state.error = "NETWORK_ERROR"
                    state.isLoading = false
            })
    }
})

// selectors
// weather data
export const weatherDataSelector = state => state.weather.weatherData
// is loading
export const isLoadingSelector = state => state.weather.isLoading
// error
export const errorSelector = state => state.weather.error

// reducer
export default weatherSlice.reducer