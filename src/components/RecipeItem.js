import React, { Component } from 'react';
import {connect} from 'react-redux';



class RecipeItem extends Component {
  render() {
    let {recipe} = this.props;
    return (
      <div className='recipe__item mb-3'>
       <a className='recipe__item--link' className='d-flex col-12' href={recipe.href}>
       <img className='recipe__item--img' src={recipe.thumbnail !== '' ? recipe.thumbnail : 'http://img.recipepuppy.com/9.jpg' } alt={recipe.title} />
            <div>
            <div className='recipe__item--title  d-flex col-12'>{recipe.title}</div>
            <div className='recipe__item--ingredient d-flex col-12'>{recipe.ingredients}</div>
            </div>
        </a>
        
      </div>
    )
  }
}

function mapStateToProps(state) {
    return state;
}


export default connect(mapStateToProps, null)(RecipeItem);


