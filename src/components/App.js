import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import './../style/style.css';



class App extends Component {
  render() {
    return (
        <div className="recipe">
          <div className="recipe__container pb-5">
        <h1 className="recipe__header d-flex col-12 col-sm-12  mb-2 pt-5 pb-2 p-0">Recipe Finder</h1>
        <SearchRecipes />
        <RecipeList />
        </div>
        </div>
    );
  }
}

export default App;
