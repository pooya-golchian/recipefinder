import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeItem from './RecipeItem';


class FavoriteRecipeList extends Component {
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
          <div className="recipe__fav">
          <a className="recipe__header d-flex col-12 col-sm-12  mb-2 pt-5 pb-2 p-0" href="/"><h1 className="">Favorites Recipes</h1></a>
                {  
                    this.props.favoriteRecipes.map((recipe, index) => {
                        return(
                        <RecipeItem 
                        key={index} 
                        recipe={recipe}
                        favoriteButton={false}
                        />
                        )
                    })
                }
        </div>
        </div>
        </div>









    )
  }
}


function mapStateToProps(state) {
    return {
      favoriteRecipes: state.favoriteRecipes
    }
    
  }
  
  export default connect(mapStateToProps, null)(FavoriteRecipeList)
  

