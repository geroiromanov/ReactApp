import { Link } from "react-router-dom";
import MealsList from "./MealsList";
import { createContext, useEffect, useMemo, useState } from "react";
import Counter from "./Counter";
import MealsProvider from "./MealsContext";

export default function Meals()
{
    const mealsList = [];
    
    const preparedMeals = mealsList.map(meal => ({...meal, selected: false}));

    const [meals, setMeals] = useState(preparedMeals);

    function onSelectMeal(id)
    {
        setMeals(meals.map((meal) => meal.id === id ? {...meal, selected: !meal.selected}: meal));
    }

    const selectedMeals = useMemo(() => meals.filter(meal => meal.selected === true), [meals]);

    return (
        <>
            <nav>
                <Link to="/">Task</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>

            <h1>Meals</h1>

            <MealsProvider>
                <MealsList onSelectMeal={onSelectMeal}/>
                {/* <Counter selectedMeals={selectedMeals}/> */}
            </MealsProvider>

            
        </>
    )
}