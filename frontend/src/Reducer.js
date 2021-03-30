export const initialState = {
	user: null,
};

export const actionTypes = {
	SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
	if (action.type === 'USER') {
		return action.payload;
	}
	if (action.type === 'CLEAR') {
		return null;
	}

	return state;
};

export default reducer;
