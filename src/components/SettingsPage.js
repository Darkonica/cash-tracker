import React from 'react';
import { connect } from 'react-redux';
import CategoriesList from './CategoriesList';

const SettingsPage = (props) => (
	<div>
		<h1>Settings</h1>
		<aside>
			<ul>
				<li></li>
				<li>Categories</li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</aside>
		<main>
			<div className="income-block">
				<h3>Income categories</h3>
				<CategoriesList categoryPart="incomes" />
			</div>
			<div className="expense-block">
				<h3>Expense categories</h3>
				<CategoriesList categoryPart="expenses" />
			</div>
		</main>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		categories: state.categories
	};
};

export default connect(mapStateToProps)(SettingsPage);