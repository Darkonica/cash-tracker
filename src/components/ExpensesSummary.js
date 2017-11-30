import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
	const expenseCount = props.expenses.length;
	const expensesTotal = props.expenses
		.map((expense) => (expense.amount))
		.reduce((sum, value) => sum + value, 0);

	return (
		<div>
			<p>Viewing {expenseCount === 1 ? `1 expense` : `${expenseCount} expenses`} totalling {numeral(expensesTotal / 100).format('$0.00')}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);