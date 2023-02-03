import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.js'
import studentClassReducer from './studentClass.js'
import loaderReducer from './loader.js'

export default configureStore({
   reducer: {
      auth: authReducer,
      studentClass: studentClassReducer,
      loader: loaderReducer
   }
})