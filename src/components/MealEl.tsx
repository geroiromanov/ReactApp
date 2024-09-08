import { useState } from "react";

export default function MealEl({meal, onSelectMeal})
{
    const [isSelected, setSelected] = useState(false);

    function onChange()
    {
        setSelected(!isSelected);
        onSelectMeal(meal.id)
    }

    return (
        <>
            <li key={meal.id}><input checked={isSelected} type="checkbox" onChange={onChange} /> {meal.name} - {meal.calories} cal.</li>
        </>
    )
}