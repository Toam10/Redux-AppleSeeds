import { I_Todo } from "../todo/types";

export interface I_Task {
	id: number;
	userId: number;
	completed: boolean;
	title: string;
}

export interface AsyncAction<T> {
	loading: boolean;
	error: string;
	data: T;
}

export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILED = "FETCH_TASKS_FAILED";

export interface Fetch_Tasks_Request extends AsyncAction<I_Task[]> {
	type: typeof FETCH_TASKS_REQUEST;
}
export interface Fetch_Tasks_Success extends AsyncAction<I_Task[]> {
	type: typeof FETCH_TASKS_SUCCESS;
}
export interface Fetch_Tasks_Failed extends AsyncAction<I_Task[]> {
	type: typeof FETCH_TASKS_FAILED;
}

export interface I_State extends AsyncAction<I_Todo[]> {}

export type TaskActions = Fetch_Tasks_Failed | Fetch_Tasks_Success | Fetch_Tasks_Request;
