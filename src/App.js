import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
const App = () => {

  const APP_ID = 'b681d1d5';
  const APP_KEY = 'b97b023d8bfaaff01a0fc39c7846ecd7'; 	
  const example = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);
  
 const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipes(data.hits)
  console.log(data.hits);
}
 
const updateSearch = e => {
  setSearch(e.target.value)
  console.log(search)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input onChange={updateSearch} className="search-bar" type="text" name="" id="" value={search}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div classN>
      {recipes.map( recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} caloreis={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      
    </div>
  );
}

export default App;
