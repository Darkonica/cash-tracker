import React from 'react';
import { connect } from 'react-redux';
import CategoriesListItem from './CategoriesListItem';
import { addCategory } from '../actions/categories';

class CategoriesList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			error: ''
		};
	};

	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	};
	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.name) {
			console.log('error');
			this.setState(() => ({ error: 'Please, set some values' }));
		} else {
			this.setState(() => ({ error: '' }))
			this.props.addCategory({
				name: this.state.name,
				categoryPart: this.props.categoryPart
			});
		}
	};

	render() {
		return (
			<div>
				{
					this.props.categories[this.props.categoryPart].length === 0 ? (
						<p>No categories</p>
					) : (
						this.props.categories[this.props.categoryPart].map((category) => {
							return <CategoriesListItem key={category.id} category={category} categoryPart={this.props.categoryPart} />
						})
					)
				}
				<form
					className="add-category-form"
					onSubmit={this.onSubmit}
				>
					<div className="block pure-u-md-2-3">
						<input
							type="text"
							placeholder="Name"
							value={this.state.name}
							onChange={this.onNameChange}
						/>
					</div>
					<div className="pure-u-md-1-3">
						<button className="btn-active">Add category</button>
					</div>
				</form>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		categories: state.categories
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	addCategory: (category) => dispatch(addCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);