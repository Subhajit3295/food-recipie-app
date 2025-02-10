

const CategoryCard = (props) => {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4" key={props.key}>
            <img className="w-full h-48 object-cover rounded-xl" src={props.img} alt='' />
            <div className="py-4">
                <h2 className="text-xl font-bold text-gray-800">{props.recipeName}</h2>
                {/* <p className="text-gray-600 text-sm mb-4">Category: {props.recipeCategory}</p> */}
                {/* <button className="bg-amber-400 text-black px-4 py-2 rounded-lg hover:bg-amber-500">
                    View Recipe
                </button> */}
            </div>
        </div>
    );
};

export default CategoryCard;
