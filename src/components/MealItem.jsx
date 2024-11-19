import React, { useContext, useEffect, useState } from "react";
import { MealContext } from "../context/MealContext";
import { Link } from "react-router-dom";

function MealItem({ name, image, id }) {
  const { area } = useContext(MealContext);

  // const [imageUrl, setImageUrl] = useState(image)c

  id;

  // useEffect(()=>{setImageUrl(image)},[image])
  return (
    <Link to={`/recipe/${id}`}>
      <div className="w-full sm:w-[300px] h-[200px] border-2 px-2 py-2 drop-shadow-xl shadow-lg my-1 rounded-lg overflow-hidden">
        <div className="h-[130px] w-[283px] bg-white rounded-md relative overflow-hidden shadow-gray-400 shadow-md">
          <img
            src={image}
            loading=""
            className="object-cover object-center h-full w-full"
            alt=""
          />
        </div>
        <title>{name}</title>
        <h2 className="text-md mt-2">Meal Name: {name.slice(0, 20)}</h2>
        <p className="text-sm text-gray-500">Area: {area}</p>
      </div>
    </Link>
  );
}

export default MealItem;
