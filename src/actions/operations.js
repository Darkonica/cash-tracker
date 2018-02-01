import uuid from 'uuid';

// ADD_OPERATION
export const addOperation = (
	{
		selectedCategory = '',
		selectedSwitchState = 'income',
		note = '',
		amount = 0,
		createdAt = 0
	} = {}
) => ({
	type: 'ADD_OPERATION',
	operation: {
		id: uuid(),
		selectedCategory,
		selectedSwitchState,
		note,
		amount,
		createdAt
	}
});

//REMOVE_OPERATION
export const removeOperation = ({ id } = {}) => ({
	type: 'REMOVE_OPERATION',
	id
});

//EDIT_OPERATION
export const editOperation = (id, updates) => ({
	type: 'EDIT_OPERATION',
	id,
	updates
});