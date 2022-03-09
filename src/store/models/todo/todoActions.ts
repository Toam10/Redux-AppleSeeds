import { Dispatch } from "redux";

import { TodoActionTypes } from "./types";

import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./types";

import { I_Todo } from "./types";

const requestTodo = (): TodoActionTypes => ({
	type: FETCH_TODO_REQUEST,
	loading: true,
	todo: [],
	error: "",
});
const receiveTodo = (todo: I_Todo[]): TodoActionTypes => ({
	type: FETCH_TODO_SUCCESS,
	loading: false,
	todo,
	error: "",
});
const invalidateTodo = (): TodoActionTypes => ({
	type: FETCH_TODO_FAILURE,
	loading: false,
	todo: [],
	error: "Unable to fetch todo list",
});

export const boundRequestTodo = () => {
	return async (dispatch: Dispatch<TodoActionTypes>) => {
		dispatch(requestTodo());
		try {
			const todo = await (await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")).json();
			dispatch(receiveTodo(todo));
		} catch (error) {
			dispatch(invalidateTodo());
		}
	};
};
