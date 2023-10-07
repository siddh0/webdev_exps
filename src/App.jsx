import { useState } from 'react'

import './App.css'
import Header from './component/Header'

import Sidebar from './component/Sidebar'
import Home from './component/Home'
import About from './component/About'


function App() {
  

  return (
    <>
     <Header />
     <div className="flex pt-16">
      <Sidebar />
      <div className=" ml-40 flex-grow">
        <Home />
        <About />
      </div>
    </div>
     
    
    </>
  )
}

export default App
