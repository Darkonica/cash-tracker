import React from 'react';
import { connect } from 'react-redux';
import OperationList from './OperationList';
import OperationForm from './OperationForm';
import CashTotals from './CashTotals';
import { addOperation } from '../actions/operations';
import CurrencyWidget from './CurrencyWidget';

export class DashboardPage extends React.Component {
	onSubmit = (operation) => {
		this.props.addOperation(operation);
	};
	render() {
		return (
			<div className="dashboard">
				<OperationForm
					categories={this.props.categories}
					onSubmit={this.onSubmit}
				/>
				<CashTotals />
				<div className="pure-u-md-1-2">
					<CurrencyWidget />
				</div>
				<OperationList />
			</div>
		);
	}
};



const mapStateToProps = (state, props) => {
	return {
		categories: state.categories
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	addOperation: (operation) => dispatch(addOperation(operation))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);