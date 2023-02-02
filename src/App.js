import React from 'react'
import LandingPage from './scenes/main/LandingPage'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
        {/* <LandingPage /> */}
        <Outlet />
    </>
  )
}

export default App