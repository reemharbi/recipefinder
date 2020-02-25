import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from '../recipe-item/recipeItem';
import { Link } from 'react-router-dom';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div>
                {this.props.favoriteRecipes.length > 0 ? (
                    <h4>
                        <Link className='Link' to='/favorites'>
                            Favorites
                        </Link>
                    </h4>
                ) : (
                    <div></div>
                )}
                {this.props.recipes.map((recipe, index) => {
                    return (
                        <RecipeItem
                            key={index}
                            recipe={recipe}
                            favoriteButton={true}
                        ></RecipeItem>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);
