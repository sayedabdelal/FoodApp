import { useState, useEffect } from "react";

import MealItem from "./MealItem.jsx";
import {fetchAvailableMeals} from '../http.js'

export default function Meals(){

    const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
        async function fetchMeals() {
            setIsFetching(true);
            setError(null);
        try {
            const mealsData = await fetchAvailableMeals();
            setMeals(mealsData);
        } catch (err) {
            setError(err.message);
        }
            setIsFetching(false);
        }
        fetchMeals();
    
  }, []);
  
    return (
        <ul id="meals">
        {meals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
        ))}
        </ul>
    )
}