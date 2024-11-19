import React, { useContext, useEffect, useState } from "react";
import { MealContext } from "../context/MealContext";

import axios from "axios";

function SingleMeals() {
  const { meal } = useContext(MealContext);

  const [mealData,setMealData]=useState({})

  const id =meal.meals[0].idMeal
  async function fethcMeal() {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      
      console.log(response.data.meals[0])
      setMealData(response.data.meals[0])
    } catch (error) {
      // console.log(error)
    }
  }

  const mealfor = {
    id: mealData.idMeal,
    name: mealData.strMeal,
    category: mealData.strCategory,
    area: mealData.strArea,
    instructions: mealData.strInstructions,
    image: mealData.strMealThumb,
    tags: mealData.strTags ? mealData.strTags.split(",") : [],
    youtube: mealData.strYoutube,
    ingredients: []
  };

  useEffect(() => {
    fethcMeal()
    console.log(mealData)
    
  }, [])
  

  const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealData[`strIngredient${i}`];
      const space ='    - '
        const measure = mealData[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(` ${ingredient} ${space} ${measure} `);
        }
    }

  // const mealData = meal.meals[0].idMeal;
  console.log(id);
  return (
    <div className="w-full mt-5">
      {/* Images Section */}
      <div className="relative flex w-full items-center justify-center">
        <img src={mealData.strMealThumb} className="h-40 w-[600px] object-cover object-center rounded-lg" alt="" />
        <h2 className="absolute -bottom-5 text-white bg-gray-600 px-8 py-2 rounded-lg">{mealData.strMeal}</h2>
      </div>

      {/* Simple Information */}
      <div className="mt-10">
        <h2 className="text-gray-600 font-medium">Recipe Area: <span className="text-2xl text-black">{mealData.strArea }</span></h2>
        <h2 className="text-gray-600 font-medium">Recipe Category: <span className="text-2xl text-black">{mealData.strCategory }</span></h2>
      </div>

      {/* Ingredients */}
      <div className="mt-2">
      <h2 className="text-3xl my-4">Ingredients:</h2>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
      </div>
    </div>
  );
}

export default SingleMeals;
