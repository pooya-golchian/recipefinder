
import React, {Component} from 'react';
class SearchRecipes extends  Component {

    constructor () {
        super();
        this.state = {
            ingredients : '',
            dish: ''
        }
    }


    search () {
        let {ingredients , dish} = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        //console.log('state',this.state, 'url', url);

        fetch(url,{method:'GET',}).then (response => response.json()).then (json => console.log('recipes', json));


    }

    
 render () {
     return (
    <div className="d-flex col-12 col-sm-12 justify-content-center align-items-center">
        <div className="form-inline">
            <div className="row form-group">
                <div className="col-auto">
                    <input 
                    onChange = {event => this.setState({ingredients:event.target.value})}
                    id="ingredients" 
                    type="text" 
                    className="ingredients form-control" 
                    placeholder="onions,garlic"></input>
                </div>
                <div className="col-auto">
                    <input                     
                     onChange = {event => this.setState({dish:event.target.value})}
                     id="dish" type="text" className="dish form-control" placeholder="omelet"></input>
                </div>
                <button 
                    onClick = {() => this.search()}
                    className="btn btn-outline-primary"
                    >Search Recipes</button>
                
            </div>
        </div>
    </div>
     )
    }


}


export default SearchRecipes;