import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import Select from 'react-select';

export default class OperationForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: props.categories,
			selectedCategory: {
				value: props.categories.incomes[0].id,
				label: props.categories.incomes[0].name
			},
			selectedSwitchState: 'income',
			note: props.operation ? props.operation.note : '',
			amount: props.operation ? (props.operation.amount / 100).toString() : '',
			createdAt: props.operation ? moment(props.operation.createdAt) : '',
			calendarFocused: false,
			error: ''
		};
	}
	
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	onAmountChange = (e) => {
		const amount = e.target.value;

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};
	handleCategoriesChange = (selectedCategory) => {
		this.setState({ selectedCategory });
	};
	currentCategories = () => {
		if (this.state.selectedSwitchState === 'income') {
	  	const result = this.state.categories.incomes.map((category) => ({
				value: category.id,
				label: category.name
    	}))
		} else {
			const result = this.state.categories.expenses.map((category) => ({
				value: category.id,
				label: category.name
    	}))
		}
		console.log(result);
		return result;
	};
	handleSwitchChange = (e) => {
		const selectedSwitchState = e.target.name;
		const switchStateWithS = selectedSwitchState + 's';
		this.setState({
			selectedSwitchState,
			selectedCategory: {
				value: this.state.categories[switchStateWithS][0].id,
				label: this.state.categories[switchStateWithS][0].name
			}
		});
	};
	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.amount) {
			console.log('error');
			this.setState(() => ({ error: 'Please, set some values' }));
		} else {
			this.setState(() => ({ error: '' }))
			const createdAtFinal = this.state.createdAt.valueOf() ? this.state.createdAt.valueOf() : moment();
			this.props.onSubmit({
				selectedCategory: this.state.selectedCategory,
				selectedSwitchState: this.state.selectedSwitchState,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: createdAtFinal,
				note: this.state.note
			});
		}
	};
	render() {
		return (
			<div className="add-form pure-u-md-1-2">

				<div className="switch-in-out flex-cont">
					<div className="block pure-u-md-1-2">
						<button
							className={`choice ${this.state.selectedSwitchState === 'income' ? 'active' : ''}`}
							name="income"
							onClick={this.handleSwitchChange}
						>Income</button>
					</div>
					<div className="block pure-u-md-1-2">
						<button
							className={`choice ${this.state.selectedSwitchState === 'expense' ? 'active' : ''}`}
							name="expense"
							onClick={this.handleSwitchChange}
						>Expense</button>
					</div>
				</div>

				<form onSubmit={this.onSubmit}>

					<div className="flex-cont">
						<div className="block">
							<input
								type="text"
								placeholder="Amount"
								value={this.state.amount}
								onChange={this.onAmountChange}
							/>
						</div>

						<div className="block">
							<SingleDatePicker
								date={this.state.createdAt ? this.state.createdAt : moment()}
								onDateChange={this.onDateChange}
								focused={this.state.calendarFocused}
								onFocusChange={this.onFocusChange}
								numberOfMonths={1}
								isOutsideRange={() => false}
							/>
						</div>

						<div className="block">
							<Select
				        name="categories"
				        value={this.state.selectedCategory}
				        onChange={this.handleCategoriesChange}
				        options={
				        	this.state.categories[`${this.state.selectedSwitchState}s`].map((category) => ({
										value: category.id,
										label: category.name
				        	}))
				        }
				      />
						</div>
					</div>
					
					<div className="block">
						<textarea
							placeholder={`Add a note for your ${this.state.selectedSwitchState === 'income' ? 'income' : 'expense'} (optional)`}
							value={this.state.note}
							onChange={this.onNoteChange}
						>
						</textarea>
					</div>

					<div className="block">
						<button className="btn-action">Add {this.state.selectedSwitchState === 'income' ? 'Income' : 'Expense'}</button>
					</div>
					
				</form>
				{<p>{this.state.error}</p>}
			</div>
		)
	}
}