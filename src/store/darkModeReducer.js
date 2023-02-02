import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
   name: 'darkMode',
   initialState: {
      isDark: false
   },

   reducers: {
      setDark: (state)=> {
         state.isDark = true
      },

      setLight: (state) => {
         state.isDark = false
      }
   }
})



export const { setDark, setLight } = darkModeSlice.actions;
export default darkModeSlice.reducer