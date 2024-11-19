import React from 'react';

const MealDetails = () => {
    const meal = {
        idMeal: "52807",
        strMeal: "Baingan Bharta",
        strCategory: "Vegetarian",
        strArea: "Indian",
        strInstructions: `Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and keep it for roasting on an open flame. You can also grill the baingan or roast in the oven, but then you won't get the smoky flavor of the baingan. Keep the eggplant turning every 2 to 3 minutes on the flame, so that it cooks evenly. You can also embed some garlic cloves in the baingan and then roast it.
        
        Roast the aubergine until it is completely cooked and tender. Use a knife to check for doneness—the knife should slide easily into the aubergine without any resistance. Once done, remove the baingan and immerse it in a bowl of water until it cools down.

        Optionally, you can do the 'dhungar' technique of infusing charcoal smoky flavor in the baingan. Use natural charcoal for this method. Heat a small piece of charcoal on flame until it becomes smoking hot and red. Make small cuts on the baingan with a knife. Place the red-hot charcoal on a plate with the roasted aubergine. Add a few drops of oil on the charcoal, and once it starts to release smoke, cover the entire plate tightly with a large bowl to let the smoke infuse for 1 to 2 minutes. This will enhance the smoky flavor of the baingan bharta. If you prefer, you can also perform this technique after cooking the baingan bharta, similar to how it is done for dal tadka.

        Peel off the skin from the roasted and smoked eggplant. Chop the cooked eggplant finely or mash it.

        Heat oil in a kadai or pan. Add finely chopped onions and garlic and sauté until the onions turn translucent (do not brown them). Add chopped green chilies and sauté for a minute. Add the chopped tomatoes and mix well. Sauté (bhuno) the tomatoes until the oil starts to separate from the mixture. Now, add red chili powder, stir, and mix well. Add the chopped cooked baingan, stir, and mix it thoroughly with the onion-tomato masala mixture. Season with salt, stir, and sauté for another 4 to 5 minutes. Finally, add chopped coriander leaves or use them for garnishing. Serve Baingan Bharta with phulkas, rotis, chapatis, toasted or grilled bread, or plain or jeera rice.`,
        strMealThumb: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
        strTags: "Spicy,Bun,Calorific",
        strYoutube: "https://www.youtube.com/watch?v=-84Zz2EP4h4",
        strIngredient1: "Aubergine",
        strIngredient2: "Onion",
        strIngredient3: "Tomatoes",
        strIngredient4: "Garlic",
        strIngredient5: "Green Chilli",
        strIngredient6: "Red Chilli Powder",
        strIngredient7: "Oil",
        strIngredient8: "Coriander Leaves",
        strIngredient9: "Salt",
        strMeasure1: "1 large",
        strMeasure2: "½ cup",
        strMeasure3: "1 cup",
        strMeasure4: "6 cloves",
        strMeasure5: "1",
        strMeasure6: "¼ teaspoon",
        strMeasure7: "1.5 tablespoon",
        strMeasure8: "1 tablespoon chopped",
        strMeasure9: "as required"
    };

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return (
        <div>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '300px', height: 'auto' }} />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            <h2>Instructions:</h2>
            <p>{meal.strInstructions}</p>
            <h2>Ingredients:</h2>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {meal.strYoutube && (
                <div>
                    <h2>Watch Recipe Video:</h2>
                    <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                </div>
            )}
        </div>
    );
};

export default MealDetails;
