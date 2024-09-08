import { Link } from "react-router-dom";
import MealsList from "./MealsList";
import { useEffect, useMemo, useState } from "react";
import Counter from "./Conter";

export default function Meals()
{
    const mealsList = [
        {
            id: 2,
            name: 'Salmon',
            calories: 277734
        },
        {
            id: 5,
            name: 'Potato',
            calories: 68453457
        },
        {
            id: 4,
            name: 'Juice',
            calories: 3977764
        },
        {
            id: 9,
            name: 'Juice',
            calories: 32934455
        },
        {
            id: 24,
            name: 'Juice',
            calories: 349773
        },
        {
            id: 8,
            name: 'Juice',
            calories: 392222
        },
        {
            id: 422,
            name: 'Juice',
            calories: 3951252
        },
        {
            id: 4322,
            name: 'Juice',
            calories: 3294636
        },
        {
            id: 44,
            name: 'Juice',
            calories: 36924574
        },
        {
            id: 47,
            name: 'Juice',
            calories: 3494857
        }
        ,{
            id: 43,
            name: 'Juice',
            calories: 32945465
        }
        ,{
            id: 48,
            name: 'Juice',
            calories: 375794333
        }
        ,{
            id: 424,
            name: 'Juice',
            calories: 37796888
        }
        ,{
            id: 74,
            name: 'Juice',
            calories: 359554
        }
        ,{
            id: 84,
            name: 'Juice',
            calories: 23933455
        }
        ,{
            id: 444,
            name: 'Juice',
            calories: 44395646
        },
        {
            id: 455,
            name: 'Juice',
            calories: 55395333
        },
        {
            id: 475,
            name: 'Juice',
            calories: 3222922334
        }
    ];

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

            <MealsList meals={meals} onSelectMeal={onSelectMeal}/>
            <Counter selectedMeals={selectedMeals}/>
        </>
    )
}