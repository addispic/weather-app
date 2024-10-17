import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {

}

// get initial data
export const getCityWeatherData = createAsyncThunk('weather/getCityWeatherData', async data => {
    console.log(data)
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${import.meta.env.VITE_WF_ID}`)
        console.log(response.data)
    }catch(err){
        console.log(err)
    }
})

// weather slice
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: builder => {

    }
})

// reducer
export default weatherSlice.reducer