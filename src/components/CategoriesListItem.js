import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCategory } from '../actions/categories';

class CategoriesListItem extends React.Component {
	constructor(props) {
		super(props);
	};
	onRemove = () => {
		this.props.removeCategory({ id: this.props.category.id, categoryPart: this.props.categoryPart });
	};
	render() {
		return (
			<div className="item-cont">

				<div className="info">
					{this.props.category.name}
				</div>

				<div className="actions">
					<div
						className="remove"
						onClick={this.onRemove}
					>remove</div>
					<div className="edit">edit</div>
				</div>
				
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch, props) => ({
	removeCategory: (data) => dispatch(removeCategory(data)),
});

export default connect(null, mapDispatchToProps)(CategoriesListItem);