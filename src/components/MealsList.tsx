import MealEl from "./MealEl";

export default function MealsList({ meals, onSelectMeal })
{
    return (
        <ul>
            {meals.map((meal) => 
                <MealEl key={meal.id} meal={meal} onSelectMeal={onSelectMeal} />
            )}
        </ul>
    );
}