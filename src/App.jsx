import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navibar'
import About from './assets/About'
import Query from './assets/Query'
import Service from './assets/Services'
import Product from './assets/Products'

function App() {
  

  return (
    <>
      <Navbar></Navbar>

      <About></About>

      <Query></Query>

      <Service></Service>

      <Product></Product>
    </>
  )
}

export default App
