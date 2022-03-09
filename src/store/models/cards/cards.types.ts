import { ADD_CARD, FETCH_CARDS_FAILED, FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS } from "./cards.constants";

export interface I_Card {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface I_CardState {
	cardsList: I_Card[];
	error: any;
	loading: boolean;
}

export interface Action<T> {
	data: T;
}

export interface AsyncAction<T> {
	data: T;
	error: string;
	loading: boolean;
}

export interface I_AddCardPayload {
	newCard: I_Card;
}

export interface I_FetchCardsPayload {
	cardsList: I_Card[];
}

export interface I_AddCard extends Action<I_AddCardPayload> {
	type: typeof ADD_CARD;
}

export interface I_FetchCardsRequest extends AsyncAction<I_FetchCardsPayload> {
	type: typeof FETCH_CARDS_REQUEST;
}
export interface I_FetchCardsSuccess extends AsyncAction<I_FetchCardsPayload> {
	type: typeof FETCH_CARDS_SUCCESS;
}
export interface I_FetchCardsFailed extends AsyncAction<I_FetchCardsPayload> {
	type: typeof FETCH_CARDS_FAILED;
}

export type CardActionsTypes = I_AddCard | I_FetchCardsFailed | I_FetchCardsRequest | I_FetchCardsSuccess;
