import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MealItem from './components/MealItem'
import Meals from './components/Meals'
import MealAreaSelector from './components/AreaSelector'
import MealDetails from './components/MealPage'
import SingleMeals from './pages/SingleMeals'

function App() {
  return (
    <div className='px-3 md:px-14'>
      <Navbar />
      {/* <Hero/> */}
      {/* <Meals/> */}
      {/* <MealAreaSelector/> */}
      {/* <Meals/> */}
      <SingleMeals/>
      {/* <MealDetails/> */}
      
    </div>
  )
}

export default App