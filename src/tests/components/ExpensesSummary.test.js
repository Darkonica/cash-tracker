import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('render ExpensesSummary', () => {
	const wrapper = shallow(<ExpensesSummary expenses={[]}/>)
	expect(wrapper).toMatchSnapshot();
});

test('render ExpensesSummary with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />)
	expect(wrapper).toMatchSnapshot();
});