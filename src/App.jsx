import { useState } from 'react'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <div className='w-full h-full flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
