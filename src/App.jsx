import { AppBar } from '@mui/material'
import { useState, useEffect } from 'react'
import Home from './Component/Home'
import Blog from './Component/Blog'
import { Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './Component/Appbar/AppBar'
import Api from './Component/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ResponsiveAppBar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Blog' element={<Blog />} />

      </Routes>

    </div>
  )
}

export default App
