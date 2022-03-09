export interface I_Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface I_TodoAsync {
	loading: boolean;
	todo: I_Todo[];
	error: string;
}

interface I_FetchTodoRequest extends I_TodoAsync {
	type: typeof FETCH_TODO_REQUEST;
}
interface I_FetchTodoSuccess extends I_TodoAsync {
	type: typeof FETCH_TODO_SUCCESS;
}
interface I_FetchTodoFailure extends I_TodoAsync {
	type: typeof FETCH_TODO_FAILURE;
}

export type TodoActionTypes = I_FetchTodoFailure | I_FetchTodoSuccess | I_FetchTodoRequest;

export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE";
