import React, { Component } from 'react';
import {connect} from 'react-redux';



class RecipeList extends Component {
  render() {
    // console.log('this.props', this.props);
    return (
      <div className='mt-3'>
         {
             this.props.recipes.map((recipe, index) => {
                 return(
                     <div className='d-flex flex-row' key={index}>
                     <a className='d-flex col-auto mb-2' href={recipe.href}>
                        <img src={recipe.thumbnail} />
                        <div>
                        <div className='d-flex col-12'>Title: {recipe.title}</div>
                        <div className='d-flex col-12'>Ingredients: {recipe.ingredients}</div>
                        </div>
                     </a>
                    
                
                    
                
                    </div>

                 )
             })
         }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return state;
}


export default connect(mapStateToProps, null)(RecipeList);


