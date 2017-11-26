import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
});

test('render ExpenseListFilters', () => {
	expect(wrapper).toMatchSnapshot();
});

test('render ExpenseListFilters with alternative data', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});

test('handle text change', () => {
	const value = 'rent'
	wrapper.find('input').simulate('change', {
		target: { value }
	});
	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('sort by date', () => {
	const value = 'date';
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByDate).toHaveBeenCalled();
});

test('sort by amount', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByAmount).toHaveBeenCalled();
});

test('handle date changes', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0).add(8, 'years');
	wrapper.find(DateRangePicker).props().onDatesChange({ startDate, endDate });
	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('handle date focus changes', () => {
	const calendarFocused = 'endDate';
	wrapper.find(DateRangePicker).props().onFocusChange(calendarFocused);
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});