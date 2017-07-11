import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

import React from 'react';
import {render} from 'react-dom';

import reducers from './reducers/index';

// import {addToCart} from './actions/cartActions';
// import {postBooks, deleteBook, updateBook} from './actions/bookActions';


const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/bookslist';

render(
	<Provider store={store}>
		<BooksList/>
	</Provider>, document.getElementById('app')
);




