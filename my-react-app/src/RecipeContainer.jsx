import Recipe from './Recipe.jsx';

function RecipeContainer({recipes}){
    return(
        <>
            {recipes.map( recipe => (<Recipe recipe={recipe} key={recipe.name}/>))}
        </>
    )
}

export default RecipeContainer;