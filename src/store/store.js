import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.js'
import darkModeReducer from './darkModeReducer.js'
import studentClassReducer from './studentClass.js'

export default configureStore({
   reducer: {
      auth: authReducer,
      dark: darkModeReducer,
      studentClass: studentClassReducer
   }
})