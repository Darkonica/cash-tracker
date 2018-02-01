import { createStore, combineReducers } from 'redux';
import operationsReducer from '../reducers/operations';
import filtersReducer from '../reducers/filters';
import categoriesReducer from '../reducers/categories';

export default () => {
	const initialState = {
		categories: {
			incomes: [
		  	{id: 0, name: 'Other'},
		  	{id: 1, name: 'Design'},
		  	{id: 2, name: 'Developing'},
		  	{id: 3, name: 'Online Shop'}
		  ],
		  expenses: [
		  	{id: 0, name: 'Other'},
		  	{id: 1, name: 'Sluts'},
		  	{id: 2, name: 'Alcohol'},
		  	{id: 3, name: 'Drugs'},
		  	{id: 4, name: 'Food'}
		  ]
		}
	};
	const store = createStore(
		combineReducers({
			operations: operationsReducer,
			filters: filtersReducer,
			categories: categoriesReducer
		}),
		initialState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};