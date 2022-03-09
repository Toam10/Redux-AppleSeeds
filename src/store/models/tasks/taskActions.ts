import { Dispatch } from "react";
import { FETCH_TASKS_FAILED, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, I_Task, TaskActions } from "./types";

export const getTasksRequest = (): TaskActions => ({
	type: FETCH_TASKS_REQUEST,
	loading: true,
	error: "",
	data: [],
});
export const getTasksSuccess = (tasks: I_Task[]): TaskActions => ({
	type: FETCH_TASKS_SUCCESS,
	loading: true,
	error: "",
	data: tasks,
});
export const getTasksFailed = (): TaskActions => ({
	type: FETCH_TASKS_FAILED,
	loading: true,
	error: "Unable to get Tasks from the server",
	data: [],
});

export const boundGetTasksRequest = () => {
	return async (dispatch: Dispatch<TaskActions>) => {
		dispatch(getTasksRequest());
		try {
			const tasks: I_Task[] = await (await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")).json();
			dispatch(getTasksSuccess(tasks));
		} catch (error) {
			dispatch(getTasksFailed());
		}
	};
};
