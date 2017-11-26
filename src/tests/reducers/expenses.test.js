import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('NOT remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

// add
test('add expense', () => {
	const expense = {
		id: '109',
		description: 'Laptop',
		note: '',
		createdAt: 20000,
		amount: 29500
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

// edit
test('edit expense', () => {
	const note = 'ediiiiiiiiiiits';
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].note).toBe(note);
});

// edit id NOT exist
test('NOT edit expense if ID doesnt exist', () => {
	const note = 'ediiiiiiiiiiits';
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});