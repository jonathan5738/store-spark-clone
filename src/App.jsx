import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'

import './components/css/variables.css'
import './components/css/general.css'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Landing/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App