import { createSlice  } from '@reduxjs/toolkit'
 

export const appSocketSlice = createSlice({
    name: 'appSocket',
    initialState: {io:null},
    reducers: {
        connect: (state,action) => {
            state.io = action.payload
        }
    }
})

export const { connect } = appSocketSlice.actions

export default appSocketSlice.reducer
