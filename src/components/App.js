import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './../style/style.css';



class App extends Component {
  render() {
    return (
        <div className="recipe">
          <div className="recipe__container pb-5">
          <nav>
            <ul>
              <li className='col-auto'><Link to='/'>Home</Link></li>
              {
          this.props.favoriteRecipes.length > 0 ?
          <li className='col-auto'><Link to='favorites'>Favorites</Link></li> :
          <li></li>
      }
            </ul>
          </nav>



        <a className="recipe__header d-flex col-12 col-sm-12  mb-2 pt-5 pb-2 p-0" href="/"><h1 className="">Recipe Finder</h1></a>
        <SearchRecipes />
        <RecipeList />
        </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps, null)(App);
