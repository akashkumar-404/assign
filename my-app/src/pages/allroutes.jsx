import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './about'
import Headtail from './head&tail'
import Home from './home'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/head&tail" element={<Headtail />} />
    </Routes>
  )
}
