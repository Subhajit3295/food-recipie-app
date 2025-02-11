import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./recipecard";
import CategoryCard from "./Categorycard";


const showError = document.getElementById('show');


const Recipies = () => {
  const urlRandom = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [meal, updateMeal] = useState([]);
  useEffect(() => {
    axios.get(urlRandom)
      .then((response) => {
        setRandomRecipe(response.data.meals)
        console.log(response.status)
      })
      .catch((error) => {
        console.error('netwrok error', error);
      })
  }, []);

  const searchMeal = () => {
    const input = document.getElementById('search');
    const inputValue = input.value.trim();
    const hidemeals = document.getElementById('category-card');
    const hideRecipeCard = document.getElementById('recipecard');
    hidemeals.classList.add('hidden')

    if (!inputValue) {
      hidemeals.classList.remove('hidden'); // Show category card // Hide error message
      hideRecipeCard.classList.add('hidden');

      return; // Avoid empty search
    }else {
      hideRecipeCard.classList.remove('hidden');
    }

    const searchMealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;

    axios.get(searchMealUrl)
      .then((response) => {
        if (response.data.meals) {
          updateMeal(response.data.meals);
          console.log(response.data.meals);
        } else {
          updateMeal([]); // Set empty array if no meals found
          showError.innerText = `Cannot find ${inputValue}`;

        }
      })
      .catch((response) => {
        console.error(response.status ,"unable to fetch");
      });
  };

  return (
    <div className="relative top-[8vh] md:top-[10vh] flex flex-col h-[100vh]">
      <div className="search absolute top-0 p-3 flex justify-center gap-2 w-[100%]" style={{
        scrollbarWidth: "none"
      }}>
        <input type="text" id="search" placeholder="Chicken..." className="outline-1 w-[100%] p-2 rounded-2xl md:w-[70%] lg:w-[40%]" />
        <button className="p-2 bg-amber-400 rounded-full flex items-center" onClick={searchMeal}><box-icon name='search' color="white"></box-icon></button>
      </div>

      <div id="category-card" className="relative top-[8vh] mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-auto h-auto">
        {randomRecipe.map((recipe) => {
          return (
            <CategoryCard key={recipe.id} img={recipe.strMealThumb} recipeName={recipe.strMeal} />
          )
        })}
      </div>
      <div id="recipecard" className="relative top-[8vh] mt-5 flex flex-col md:flex-row flex-wrap justify-center gap-5 m-auto h-auto">
        <p id="show" className="text-red-500 hidden">Error</p>
        {meal.length > 0 &&
          meal.map((showMeal) => (
            <RecipeCard key={showMeal.idMeal} mealName={showMeal.strMeal} image={showMeal.strMealThumb} category={showMeal.strCategory} instructions={showMeal.strInstructions} />
          ))
        }
      </div>

    </div>
  )
}

export default Recipies;
