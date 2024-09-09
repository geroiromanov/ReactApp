import { useContext } from "react";
import MealEl from "./MealEl";
import { MealsContext } from "./MealsContext";

export default function MealsList({ onSelectMeal })
{
    const meals = useContext(MealsContext);
    console.log(meals);
    
    if (meals) {
        return (
            <ul>
                {meals.map((meal) => 
                    <MealEl key={meal.id} meal={meal} onSelectMeal={onSelectMeal} />
                )}
            </ul>
        );
    }
    
}