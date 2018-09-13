import { combineReducers } from 'redux';
import {SET_RECIPES, FAVORITE_RECIPE} from '../actions';
import { bake_cookie, read_cookie } from 'sfcookies';




function recipes(state = [], action) {
    recipes = read_cookie('recipes');

    switch (action.type) {
        case SET_RECIPES:
        bake_cookie('recipes', recipes);

            return action.items;
        default:
            return state;

    }
}

function favoriteRecipes(state = [], action) {
    state = read_cookie('state');
    favoriteRecipes = read_cookie('favoriteRecipes');

    switch (action.type) {
        case FAVORITE_RECIPE:
            state = [...state, action.recipe];
            bake_cookie('state', state);
            bake_cookie('favoriteRecipes', favoriteRecipes);

            return state;
        default:
            return state;

    }
}

const rootReducer = combineReducers({recipes, favoriteRecipes});
export default rootReducer;