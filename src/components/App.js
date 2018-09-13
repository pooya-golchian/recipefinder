import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import FavoriteRecipeList from './FavoriteRecipeList';
import './../style/style.css';



class App extends Component {
  render() {
    return (
        <div className="recipe">
          <div className="recipe__container pb-5">
        <a className="recipe__header d-flex col-12 col-sm-12  mb-2 pt-5 pb-2 p-0" href="/"><h1 className="">Recipe Finder</h1></a>
        <SearchRecipes />
        <RecipeList />
        <FavoriteRecipeList />
        </div>
        </div>
    );
  }
}

export default App;
