import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, I_Todo, TodoActionTypes } from "./types";

export interface I_TodoState {
	loading: boolean;
	todo: I_Todo[];
	error: string;
}

const defaultState: I_TodoState = {
	loading: false,
	todo: [],
	error: "",
};

export const todoReducer = (state = defaultState, action: TodoActionTypes): I_TodoState => {
	switch (action.type) {
		case FETCH_TODO_REQUEST:
			return { loading: true, todo: [], error: "" };
		case FETCH_TODO_SUCCESS:
			return { loading: false, todo: action.todo, error: "" };
		case FETCH_TODO_FAILURE:
			return { loading: false, todo: [], error: action.error };
		default:
			return state;
	}
};
