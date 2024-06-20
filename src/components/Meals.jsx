import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //..
      }

      const meals = await response.json();
      setLoadMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
