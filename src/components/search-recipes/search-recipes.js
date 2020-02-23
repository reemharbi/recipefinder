import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { setRecipes } from '../../actions';

class SearchRecipes extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        };
    }

    search() {
        console.log('state', this.state);
        let { ingredients, dish } = this.state;
        const url = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        //  API CALL
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
            .then(json => {
                this.props.setRecipes(json.results)
            });
          }

    render() {
        return (
            <Form className='inline'>
                <Form.Group>
                    <Form.Label>Ingredients </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='garlic, chicken'
                        onChange={(event) =>
                            this.setState({ ingredients: event.target.value })
                        }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dish </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='adobo'
                        onChange={(event) =>
                            this.setState({ dish: event.target.value })
                        }
                    />
                </Form.Group>
                <Button
                    className='bg-info border-0'
                    onClick={() => this.search()}
                >
                    Submit
                </Button>
            </Form>
        );
    }
}

export default connect(null, {setRecipes})(SearchRecipes);
