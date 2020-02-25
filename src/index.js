import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import FavoriteRecipeList from './components/favorites-list/favorites-list';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
// See the current state of the store 
store.subscribe(() => console.log('store', store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/favorites' component={FavoriteRecipeList} />
        </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
