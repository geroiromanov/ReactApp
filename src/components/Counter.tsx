import { useMemo } from "react";

export default function Counter({selectedMeals})
{
    console.time('filter array');
    const calories = selectedMeals.reduce((carry, val) => carry + val.calories, 0);
    console.timeEnd('filter array');
    return (
        <>
            Items selected: {selectedMeals.length}
            Calories: {calories}
        </>
    )
}