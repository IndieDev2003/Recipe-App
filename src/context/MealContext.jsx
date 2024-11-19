import axios from "axios";
import { createContext, useEffect, useState } from "react";
import meal from '../assets/meal'

export const MealContext = createContext();

const MealContextProvider = ({ children }) => {

    const [meals, setMeals] = useState([])
    const [area,setArea] =useState('Indian')

    const fetchMeals = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            setMeals(response.data.meals.slice(0,10))
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchMeals();
    },[area])
    
    useEffect(() => {
        console.log(meals)
    },[meals,area])
    const mealData = {
        meal,
        meals,
        area,
        setArea
    }

    return <MealContext.Provider value={mealData}>{children}</MealContext.Provider>
}


export default MealContextProvider