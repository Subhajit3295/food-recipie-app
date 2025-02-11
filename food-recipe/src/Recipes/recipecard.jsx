import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="max-w-sm rounded-2xl h-auto shadow-lg bg-white achover:bg-amber-400 focus:bg-amber-400 hover:bg-amber-400 hover:cursor-pointer hover:scale-103 p-4 active:bg-amber-400 duration-300" key={props.key}>
      <img className="w-full h-48 object-cover rounded-xl" src={props.image} alt={props.mealName} />
      <div className="py-4">
        <h2 className="text-xl font-bold text-gray-800">{props.mealName}</h2>
        <p className="text-sm text-gray-600">{props.category}</p>
      </div>
      <div className="text-gray-700 text-sm h-auto">
        <h3 className="font-semibold">Instructions:</h3>
        <p className="">{props.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
