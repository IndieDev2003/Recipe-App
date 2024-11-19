import axios from "axios";
import { createContext, useEffect, useState } from "react";
import meal from "../assets/meal";

export const MealContext = createContext();

const MealContextProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [area, setArea] = useState("Indian");

  const fetchMeals = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      setMeals(response.data.meals.slice());
    } catch (error) {
      error;
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [area]);

  useEffect(() => {
    meals;
  }, [meals, area]);
  const mealData = {
    meal,
    meals,
    area,
    setArea,
  };

  return (
    <MealContext.Provider value={mealData}>{children}</MealContext.Provider>
  );
};

export default MealContextProvider;
