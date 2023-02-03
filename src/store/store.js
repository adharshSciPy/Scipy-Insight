import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.js'
import darkModeReducer from './darkModeReducer.js'
import LoginedUserRecducer from './loginedUserSlice.js'
import studentClassReducer from './studentClass.js'
import userReducer  from './userslice.js'

export default configureStore({
   reducer: {
      auth: authReducer,
      dark: darkModeReducer,
      studentClass: studentClassReducer,
      loginedUser: LoginedUserRecducer,
      user : userReducer
   }
})