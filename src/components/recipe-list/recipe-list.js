import React, { Component } from 'react'
import { connect } from 'react-redux';
import RecipeItem  from '../recipe-item/recipeItem';

class RecipeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div>
                {
                this.props.recipes.map((recipe, index) => {
                    return (
                        <RecipeItem key={index} recipe={recipe}>
                        </RecipeItem>
                    )
                })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);