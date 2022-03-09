import { fetchCardSuccess } from "./cards.actions";
import { ADD_CARD, FETCH_CARDS_FAILED, FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS } from "./cards.constants";
import { CardActionsTypes, I_Card, I_CardState } from "./cards.types";

const defaultState: I_CardState = {
	cardsList: [] as I_Card[],
	error: "",
	loading: false,
};

export const cardsReducer = (state: I_CardState = defaultState, action: CardActionsTypes) => {
	let newState = {} as I_CardState;
	switch (action.type) {
		case ADD_CARD:
			const newCardsList = [...state.cardsList];
			newCardsList.push(action.data.newCard);
			newState = { ...state, cardsList: newCardsList };
			return newState;
		case FETCH_CARDS_REQUEST:
			newState = { ...state, loading: true };
			return newState;
		case FETCH_CARDS_SUCCESS:
			newState = { ...state, loading: false, cardsList: action.data.cardsList };
			return newState;
		case FETCH_CARDS_FAILED:
			newState = { ...state, loading: false, error: action.error };
			return newState;
		default:
			return state;
	}
};
