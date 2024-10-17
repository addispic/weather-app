import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

// initial state
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    profiles: JSON.parse(localStorage.getItem("profiles")) || []
}

// users slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userLogin: (state,action) => {
            localStorage.setItem("user",JSON.stringify(action.payload))
            state.user = action.payload
        },
        userLogout: (state) => {
            localStorage.removeItem("user")
            localStorage.removeItem("profiles")
            state.user = null
            state.profiles = []
        },
        addNewProfile: (state,action) => {
            state.profiles.unshift({_id: uuidv4(), image: action.payload})
            
            let filteredProfiles = []
            state.profiles?.forEach(profileItem => {
                if(!filteredProfiles.find(proItem => proItem.image === profileItem.image)){
                    filteredProfiles.push(profileItem)
                }
            })
            state.profiles = filteredProfiles
            localStorage.setItem("profiles",JSON.stringify(filteredProfiles))
        },
        deleteProfile: (state,action) => {
            state.profiles = state.profiles.filter(profile => profile._id !== action.payload)
            localStorage.setItem("profiles",JSON.stringify(state.profiles))
        },
        profilesRefresh: state => {
            state.profiles = JSON.parse(localStorage.getItem("profiles")) || []
        }
    }
})

// selector
// user selector
export const userSelector = state => state.users.user
// profiles
export const profilesSelector = state => state.users.profiles

// actions
export const {
    userLogin,
    userLogout,
    addNewProfile,
    deleteProfile,
    profilesRefresh,
} = usersSlice.actions

// reducer
export default usersSlice.reducer