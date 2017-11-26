import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import { SingleDatePicker } from 'react-dates';

test('render Expense Form', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('render Expense Form with expense data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('render error for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('set description on input change', () => {
	const value = 'New description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('description')).toBe(value);
});

test('set note on textarea change', () => {
	const value = 'New note';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('note')).toBe(value);
});

test('set valid amount on change', () => {
	const value = '1945.02';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('amount')).toBe(value);
});

test('set INVALID amount on change', () => {
	const value = 'fuck';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('amount')).toBe('');
});

test('call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
	});
});

test('set new date on date change', () => {
	const now = moment().add(4, 'days');
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find(SingleDatePicker).props().onDateChange(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('set new onFocusChange', () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find(SingleDatePicker).props().onFocusChange({ focused });
	expect(wrapper.state('calendarFocused')).toBe(focused);
});