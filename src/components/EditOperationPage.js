import React from 'react';
import { connect } from 'react-redux';
import OperationForm from './OperationForm';
import { editOperation, removeOperation } from '../actions/operations';

export class EditOperationPage extends React.Component {
	onSubmit = (operation) => {
		this.props.editOperation(this.props.operation.id, operation);
		this.props.history.push('/');
	};
	onRemove = () => {
		this.props.removeOperation({ id: this.props.operation.id });
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<OperationForm
					expense={this.props.operation}
					onSubmit={this.onSubmit}
				/>
				<button onClick={this.onRemove}>Remove</button>
			</div>
		);
	}
	
};

const mapStateToProps = (state, props) => {
	return {
		operation: state.operations.find((operation) => {
			return operation.id === props.match.params.id;
		})
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	editOperation: (id, operation) => dispatch(editOperation(id, operation)),
	removeOperation: (data) => dispatch(removeOperation(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditOperationPage);