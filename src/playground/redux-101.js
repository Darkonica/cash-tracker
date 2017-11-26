import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy: decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({ count } = {}) => ({
	type: 'SET',
	count: count
});


// Reducers


const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
		const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});


// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
// 	type: 'DECREMENT',
// 	decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));