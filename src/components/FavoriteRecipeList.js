import React, { Component } from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';


class FavoriteRecipeList extends Component {
  render() {
    return (
        <div className="recipe__fav">
            <div className="recipe__header">Favorite Recipe</div>
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
    )
  }
}


function mapStateToProps(state) {
    return {
      favoriteRecipes: state.favoriteRecipes
    }
  }
  
  export default connect(mapStateToProps, null)(FavoriteRecipeList)
  

