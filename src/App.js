import React from 'react';
import './App.css';

import SearchRecipes from "./components/search-recipes/search-recipes";
import RecipeList from './components/recipe-list/recipe-list';


function App() {
  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchRecipes />
      <RecipeList />
    </div>
  );
}

export default App;
