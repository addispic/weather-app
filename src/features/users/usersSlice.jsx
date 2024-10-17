import {createSlice} from '@reduxjs/toolkit'


// initial state
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    profiles: []
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
            state.user = null
            state.profiles = []
        },
        addNewProfile: (state,action) => {
            state.profiles.unshift({_id: `${Date.now()}`, image: action.payload})
            
            let filteredProfiles = []
            state.profiles?.forEach(profileItem => {
                if(!filteredProfiles.find(proItem => proItem.image === profileItem.image)){
                    filteredProfiles.push(profileItem)
                }
            })
            state.profiles = filteredProfiles
        },
        deleteProfile: (state,action) => {
            state.profiles = state.profiles.filter(profile => profile._id !== action.payload)
        },
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
} = usersSlice.actions

// reducer
export default usersSlice.reducer