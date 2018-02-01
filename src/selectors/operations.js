import moment from 'moment';

// Get visible operations
const getVisibleOperations = (operations, { sortBy, startDate, endDate }) => {
	return operations.filter((operation) => {
		const createdAtMoment = moment(operation.createdAt);

		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

		return startDateMatch && endDateMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		}
		if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};

export default getVisibleOperations;