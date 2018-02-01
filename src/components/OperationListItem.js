import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { removeOperation } from '../actions/operations';

// class ExpenseListItem extends React.Component = ({ id, selectedCategory, selectedSwitchState, note, amount, createdAt }) => (
class OperationListItem extends React.Component {
	constructor(props) {
		super(props);
	};
	onRemove = () => {
		this.props.removeOperation({ id: this.props.id });
	};
	render() {
		return (
			<div className={`item-cont ${this.props.selectedSwitchState === 'income' ? 'income' : 'expense'}`}>

				<div className="info">
					<div className="upper-part">
						<span>
							{this.props.selectedCategory.label}
						</span>
						<span>
							{numeral(this.props.amount / 100).format('$0,0.00')} 
						</span>
					</div>
					
					<div className="lower-part">
						<span>{this.props.note}</span>

						<span className="date">
							{moment(this.props.createdAt).format('L')}
						</span>
					</div>
				</div>

				<div className="actions">
					<div
						className="remove"
						onClick={this.onRemove}
					>remove</div>
					<div className="edit"><Link to={`/edit/${this.props.id}`}>edit</Link></div>
				</div>
				
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch, props) => ({
	removeOperation: (data) => dispatch(removeOperation(data))
});

export default connect(null, mapDispatchToProps)(OperationListItem);