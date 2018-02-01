const categoriesReducerDefaultState = [];

const categoriesReducer = (state = categoriesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_CATEGORY':
			return {
				...state,
				[action.categoryPart]: [
					...state[action.categoryPart],
					{
						id: action.id,
						name: action.name
					}
				]
			};
		case 'REMOVE_CATEGORY': {
			return {
				...state,
				[action.categoryPart]: state[[action.categoryPart]].filter(({ id }) => {
					return id !== action.id;
				})
			}
		}
		default:
			return state;
	}
};

export default categoriesReducer;