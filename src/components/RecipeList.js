import React, { Component } from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';



class RecipeList extends Component {
  render() {
    // console.log('this.props', this.props);
    return (
      <div className='mt-3'>
      
         {
             this.props.recipes.map((recipe, index) => {
                 return(
                     <RecipeItem 
                     className='d-flex flex-row'
                      key={index} 
                      recipe={recipe}
                      favoriteButton={true}
                      />
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


