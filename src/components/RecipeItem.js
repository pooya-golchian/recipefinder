import React, { Component } from 'react';
import {connect} from 'react-redux';
import { favoriteRecipe } from '../actions';


class RecipeItem extends Component {

constructor() {
  super();
  this.state = {
    favorited : false
  }
}


favorite(recipe) {
  this.props.favoriteRecipe(recipe);
  this.setState({favorited : true});
}


  render() {
    let {recipe} = this.props;
    return (
      <div className='recipe__item mb-3'>
    
       <div  className='recipe__item--link d-flex col-12'>
       <a target="_blank"  href={recipe.href}><img className='recipe__item--img' src={recipe.thumbnail !== '' ? recipe.thumbnail : 'http://img.recipepuppy.com/9.jpg' } alt={recipe.title} /></a>
            <a className="recipe__item__link" target="_blank"  href={recipe.href} >
            <div className='recipe__item__link--title  d-flex col-12'>{recipe.title}</div>
            <div className='recipe__item__link--ingredient d-flex col-12'>{recipe.ingredients}</div>
            </a>
            {
              this.props.favoriteButton ?
                this.state.favorited  ?
                <div></div>
                :
                <div className="col-auto recipe__item--star-fill" onClick={()=> this.favorite(recipe) } > &#9829; </div>
                :
                <div></div>

            }
        </div>
        
      </div>
    )
  }
}



export default connect( null, {favoriteRecipe})(RecipeItem);


