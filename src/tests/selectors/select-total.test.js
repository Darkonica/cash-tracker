import selectExpensesTotal from '../../selectors/select-total.js';
import expenses from '../fixtures/expenses';

test('total expenses amount', () => {
	const result = selectExpensesTotal(expenses);
	console.log(result);
	expect(result).toEqual(111645);
});

test('total expenses amount -- empty array', () => {
	const result = selectExpensesTotal([]);
	console.log(result);
	expect(result).toEqual(0);
});

test('total expenses amount -- array with single expense', () => {
	const result = selectExpensesTotal([expenses[0]]);
	console.log(result);
	expect(result).toEqual(195);
});