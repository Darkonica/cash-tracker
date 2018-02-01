import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectOperations from '../selectors/operations';

export const CashTotals = (props) => {
	const expensesAmount = props.operations
		.filter((expense) => {
			return expense.selectedSwitchState === 'expense'
		})
		.map((expense) => (expense.amount))
		.reduce((sum, value) => sum + value, 0);

	const incomesAmount = props.operations
		.filter((income) => {
			return income.selectedSwitchState === 'income'
		})
		.map((income) => (income.amount))
		.reduce((sum, value) => sum + value, 0);

	return (
		<div className="cash-totals pure-u-md-1-2">
			<div className="block pure-u-md-1-3">
				<h3>Balance</h3>
				<div className="amount">{numeral((incomesAmount - expensesAmount) / 100).format('$0.00')}</div>
			</div>
			<div className="block pure-u-md-1-3">
				<h3>Incomes</h3>
				<div className="amount">{numeral(incomesAmount / 100).format('$0.00')}</div>
			</div>
			<div className="block pure-u-md-1-3">
				<h3>Expenses</h3>
				<div className="amount">{numeral(expensesAmount / 100).format('$0.00')}</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		operations: selectOperations(state.operations, state.filters)
	};
};

export default connect(mapStateToProps)(CashTotals);