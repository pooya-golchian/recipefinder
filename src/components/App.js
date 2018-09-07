import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import './../style/style.css';



class App extends Component {
  render() {
    return (
      <div className="container pb-5">
      <h1 className="d-flex col-12 col-sm-12  mb-2 pt-5">Recipe Finder</h1>
      <SearchRecipes />
      <RecipeList />
      </div>
    );
  }
}

export default App;
