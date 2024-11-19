import React, { useContext, useEffect, useState } from "react";
import { MealContext } from "../context/MealContext";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleMeals() {
  const { meal } = useContext(MealContext);

  const [mealData, setMealData] = useState({});
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    async function fetchMeal() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = response.data.meals[0];
        setMealData(data);
        setSteps(data.strInstructions ? data.strInstructions.split(".") : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMeal();
  }, [id]);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealData[`strIngredient${i}`];
    const measure = mealData[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  //  (steps)

  return (
    <div className="w-full mt-5 mb-10">
      {/* Images Section */}
      <div className="relative flex w-full items-center justify-center">
        <img
          src={mealData.strMealThumb}
          className="h-40 w-[600px] object-cover object-center rounded-lg"
          alt={mealData.strMeal}
        />
        <h2 className="absolute -bottom-5 text-white bg-gray-600 px-8 py-2 rounded-lg">
          {mealData.strMeal}
        </h2>
      </div>

      {/* Simple Information */}
      <div className="mt-10">
        <h2 className="text-gray-600 font-medium">
          Recipe Area:{" "}
          <span className="text-2xl text-black">{mealData.strArea}</span>
        </h2>
        <h2 className="text-gray-600 font-medium">
          Recipe Category:{" "}
          <span className="text-2xl text-black">{mealData.strCategory}</span>
        </h2>
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

      {/* Instructions */}
      <div>
        <h2 className="text-3xl my-4">Instructions:</h2>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{step.trim()}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SingleMeals;
