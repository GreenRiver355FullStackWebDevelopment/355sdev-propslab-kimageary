import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import recipes from './data.js';
import RecipeContainer from './RecipeContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeContainer recipes={recipes}/>
    </>
  )
}

export default App
