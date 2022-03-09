import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";

import { todoReducer } from "./models/todo/todoReducers";
import { TodoActionTypes } from "./models/todo/types";
import { TaskActions } from "./models/tasks/types";
import { taskReducer } from "./models/tasks/taskReducer";
import { documentReducer } from "./models/documents/documents.reducers";
import { DocumentsActionsTypes } from "./models/documents/documents.types";
import { cardsReducer } from "./models/cards/cards.reducer";
import { CardActionsTypes } from "./models/cards/cards.types";

// export type AppActions = TodoActionTypes & TaskActions & DocumentsActionsTypes & CardActionsTypes;

// const logger = createLogger();

// export const rootReducer = combineReducers({
// 	todoList: todoReducer,
// 	tasksList: taskReducer,
// 	documentsState: documentReducer,
// 	cardsState: cardsReducer,
// });

// export type AppState = ReturnType<typeof rootReducer>;

// export const store = createStore<AppState, AppActions, {}, {}>(
// 	rootReducer,
// 	applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
// );

export type AppActions = CardActionsTypes;

export const rootReducer = combineReducers({
	cardsState: cardsReducer,
});

const logger = createLogger({ logErrors: true });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
	rootReducer,
	applyMiddleware(thunk as ThunkMiddleware, logger)
);
