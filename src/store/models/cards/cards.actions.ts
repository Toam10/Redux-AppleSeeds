import { Dispatch } from "redux";
import { ADD_CARD, FETCH_CARDS_FAILED, FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS } from "./cards.constants";
import {
	CardActionsTypes,
	I_AddCard,
	I_Card,
	I_FetchCardsFailed,
	I_FetchCardsRequest,
	I_FetchCardsSuccess,
} from "./cards.types";

export const addCard = (newCard: I_Card): I_AddCard => ({
	type: ADD_CARD,
	data: {
		newCard,
	},
});

export const fetchCardRequest = (): I_FetchCardsRequest => ({
	type: FETCH_CARDS_REQUEST,
	error: "",
	loading: true,
	data: {
		cardsList: [] as I_Card[],
	},
});
export const fetchCardSuccess = (cardsList: I_Card[]): I_FetchCardsSuccess => ({
	type: FETCH_CARDS_SUCCESS,
	error: "",
	loading: false,
	data: {
		cardsList,
	},
});
export const fetchCardFailed = (error: any): I_FetchCardsFailed => ({
	type: FETCH_CARDS_FAILED,
	error: error,
	loading: false,
	data: {
		cardsList: [] as I_Card[],
	},
});

export const boundFetchCardsRequest = () => {
	return async (dispatch: Dispatch<CardActionsTypes>) => {
		dispatch(fetchCardRequest()); //Pending
		try {
			const URL = "https://jsonplaceholdsdsder.typicode.com/todos?_limit=5";
			const cardsList: I_Card[] = await (await fetch(URL)).json();
			dispatch(fetchCardSuccess(cardsList)); //Success
		} catch (error) {
			dispatch(fetchCardFailed(error)); //Failed
		}
	};
};
