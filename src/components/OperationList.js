import React from 'react';
import { connect } from 'react-redux';
import OperationListItem from './OperationListItem';
import selectOperations from '../selectors/operations'

export const OperationList = (props) => (
	<div className="operations-cont pure-u-md-1-2">
		<h1>Last Operations</h1>
		{
			props.operations.length === 0 ? (
				<p>No operations</p>
			) : (
				props.operations.map((operation) => {
					return <OperationListItem key={operation.id} {...operation}/>
				})
			)
		}
		
	</div>
);

const mapStateToProps = (state) => {
	return {
		operations: selectOperations(state.operations, state.filters)
	};
};

export default connect(mapStateToProps)(OperationList);