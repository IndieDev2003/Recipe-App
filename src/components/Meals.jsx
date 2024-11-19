import React, { useContext } from "react";
import MealItem from "./MealItem";
import { MealContext } from "../context/MealContext";
import MealAreaSelector from "./AreaSelector";

function Meals() {
  const { meals } = useContext(MealContext);
  return (
    <div className="h-fit">
      <div className="flex flex-col w-full items-center justify-center text-center">
        <h2 className="text-4xl my-2">Meals By Area</h2>
        <p className="w-[90%] sm:w-[70%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          totam ipsum quaerat inventore debitis, culpa quod rerum nobis dolorem.
          Architecto.
        </p>
      </div>
      <MealAreaSelector/>
      <div className="h-fit mt-2 w-full gap-1 items-start justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals.map((meal, index) => (
          <MealItem key={index} image={meal.strMealThumb} name={meal.strMeal} id={meal.idMeal} />
        ))}
      </div>
    </div>
  );
}

export default Meals;
