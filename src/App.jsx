import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MealItem from './components/MealItem'
import Meals from './components/Meals'
import MealAreaSelector from './components/AreaSelector'
// import MealDetails from './components/MealPage'
import SingleMeal from './pages/SingleMeal'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className='px-3 md:px-14'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipe/:id' element={<SingleMeal/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App