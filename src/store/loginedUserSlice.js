import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  id :'bla',
  isConnected : false
}

export const LoginedUserSlice = createSlice({
  name:'loginedUser',
  initialState,
  reducers: {
     loggeduser : (state,action ) => {
         state.id = action.payload
         console.log(state.id);        
     },
     isConnected : (state) => {
          state.isConnected = true
     },
     isNotConnected : (state) => {
        state.isConnected = false
     }
  },
})

// Action creators are generated for each case reducer function
export const {  loggeduser,isConnected,isNotConnected } = LoginedUserSlice.actions

export default  LoginedUserSlice.reducer