
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRecipes} from './../actions';


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
        console.log('state',this.state, 'url', url);

        fetch(url,
            {method:'GET',}).then (response => response.json())
            .then (json => this.props.setRecipes(json.results));


    }

    
 render () {
     return (
    <div className="d-flex col-12 col-sm-12 ">
        <div className=" col-12 p-0">
            <div className="row ">
                <div className="col-6 col-sm-12 col-md-5 pl-0">
                    <input 
                    onChange = {event => this.setState({ingredients:event.target.value})}
                    id="ingredients" 
                    type="text" 
                    className="ingredients form-control" 
                    placeholder="onions,garlic"></input>
                </div>
                <div className="col-6 col-sm-12 col-md-5 pl-0">
                    <input                     
                     onChange = {event => this.setState({dish:event.target.value})}
                     id="dish" type="text" className="dish form-control" placeholder="omelet"></input>
                </div>
                <button 
                    onClick = {() => this.search()}
                    className="col-12 col-sm-12 col-md-2  btn btn-outline-primary"
                    >Find</button>
                
            </div>
        </div>
    </div>
     )
    }


}


export default connect(null, {setRecipes})(SearchRecipes);