const selectExpensesTotal = (expenses) => {
	if (expenses.length === 0) {
		return 0;
	} else {
		const amountArr = expenses.map((val) => {
			return val.amount;
		});
		return amountArr.reduce(function(sum, value) {
			return sum + value;
		}, 0);
	}
};

export default selectExpensesTotal;