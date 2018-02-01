import uuid from 'uuid';

// ADD_CATEGORY
export const addCategory = ({ name, categoryPart } = {}) => ({
	type: 'ADD_CATEGORY',
	id: uuid(),
	name,
	categoryPart
});

//REMOVE_CATEGORY
export const removeCategory = ({ id, categoryPart } = {}) => ({
	type: 'REMOVE_CATEGORY',
	id,
	categoryPart
});