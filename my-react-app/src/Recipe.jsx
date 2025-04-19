function Recipe({recipe}){
    const ingredients = recipe.ingredients;
    const instructions = recipe.instructions;
    return(
        <div className="recipe-card">
            <h2>{recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map(ingredient => <li>{ingredient}</li>)}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {instructions.map(task => <li>{task}</li>)}
            </ol>
        </div>
    )
}

export default Recipe;