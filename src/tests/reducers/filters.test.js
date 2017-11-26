import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('set sortBy to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('set text filter', () => {
	const text = 'rent';
	const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
	expect(state.text).toBe(text);
});

test('set startDate', () => {
	const startDate = moment(0);
	const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
	expect(state.startDate).toEqual(startDate);
});

test('set endDate', () => {
	const endDate = moment(0).add(4, 'days').valueOf();
	const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
	expect(state.endDate).toEqual(endDate);
});