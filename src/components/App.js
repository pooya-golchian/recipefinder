import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import './../style/style.css';



class App extends Component {
  render() {
    return (
      <div className="container">
      <h1 className="d-flex col-12 col-sm-12 justify-content-center align-items-center mb-2 pt-5">Recipe Finder</h1>
      <SearchRecipes/>
      </div>
    );
  }
}

export default App;
