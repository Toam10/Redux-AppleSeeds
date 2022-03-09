import { FETCH_TASKS_FAILED, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, I_State, I_Task, TaskActions } from "./types";

const defaultState: I_State = {
	data: [] as I_Task[],
	error: "",
	loading: false,
};

export const taskReducer = (state: I_State = defaultState, action: TaskActions) => {
	switch (action.type) {
		case FETCH_TASKS_REQUEST:
			return { loading: true, error: "", data: [] };
		case FETCH_TASKS_SUCCESS:
			return { loading: false, error: "", data: action.data };
		case FETCH_TASKS_FAILED:
			return { loading: false, error: action.error, data: [] };
		default:
			return state;
	}
};
