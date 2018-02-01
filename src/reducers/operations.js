const operationsReducerDefaultState = [];

const operationsReducer = (state=operationsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_OPERATION':
			return [
				...state,
				action.operation
			];
		case 'REMOVE_OPERATION':
			return state.filter(({ id }) => {
				return id !== action.id;
			});
		case 'EDIT_OPERATION':
			return state.map((operation) => {
				if (operation.id === action.id) {
					return {
						...operation,
						...action.updates
					};
				} else {
					return operation;
				};
			});
		default:
			return state;
	}
};

export default operationsReducer;