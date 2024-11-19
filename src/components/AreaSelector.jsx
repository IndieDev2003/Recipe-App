import React, { useContext, useState } from 'react';
import { MealContext } from '../context/MealContext';

const MealAreaSelector = () => {
    const {area,setArea}= useContext(MealContext)
    const areas = [
        { "strArea": "American" },
        { "strArea": "British" },
        { "strArea": "Canadian" },
        { "strArea": "Chinese" },
        { "strArea": "Croatian" },
        { "strArea": "Dutch" },
        { "strArea": "Egyptian" },
        { "strArea": "Filipino" },
        { "strArea": "French" },
        { "strArea": "Greek" },
        { "strArea": "Indian" },
        { "strArea": "Irish" },
        { "strArea": "Italian" },
        { "strArea": "Jamaican" },
        { "strArea": "Japanese" },
        { "strArea": "Kenyan" },
        { "strArea": "Malaysian" },
        { "strArea": "Mexican" },
        { "strArea": "Moroccan" },
        { "strArea": "Polish" },
        { "strArea": "Portuguese" },
        { "strArea": "Russian" },
        { "strArea": "Spanish" },
        { "strArea": "Thai" },
        { "strArea": "Tunisian" },
        { "strArea": "Turkish" },
        { "strArea": "Ukrainian" },
        { "strArea": "Unknown" },
        { "strArea": "Vietnamese" }
    ];

    const [selectedArea, setSelectedArea] = useState('');

    const handleSelectChange = (event) => {
        setArea(event.target.value);
    };

    return (
        <div className='border py-2 px-2 sm:w-fit rounded-lg flex flex-row items-start justify-center'>
            <label htmlFor="meal-area-selector">Select a Meal Area:</label>
            <select
                id="meal-area-selector"
                value={selectedArea}
                onChange={handleSelectChange}
                className='outline-none'
            >
                <option value="" disabled>Select an area</option>
                {areas.map((area, index) => (
                    <option key={index} value={area.strArea}>
                        {area.strArea}
                    </option>
                ))}
            </select>
            {selectedArea && (
                <p>You selected: {selectedArea}</p>
            )}
        </div>
    );
};

export default MealAreaSelector;
