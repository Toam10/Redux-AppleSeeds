import {
	DocumentsActionsTypes,
	FETCH_DOCUMENTS_FAILED,
	FETCH_DOCUMENTS_REQUEST,
	FETCH_DOCUMENTS_SUCCESS,
	I_Document,
	I_DocumentsState,
} from "./documents.types";

const defaultState: I_DocumentsState = {
	data: {
		documents: [] as I_Document[],
	},
	error: "",
	loading: false,
};

export const documentReducer = (state: I_DocumentsState = defaultState, action: DocumentsActionsTypes) => {
	switch (action.type) {
		case FETCH_DOCUMENTS_REQUEST:
			return { loading: true, error: "", data: { documents: [] as I_Document[] } };
		case FETCH_DOCUMENTS_SUCCESS:
			return { loading: false, error: "", data: { documents: action.data.documents as I_Document[] } };
		case FETCH_DOCUMENTS_FAILED:
			return { loading: false, error: action.error, data: { documents: [] as I_Document[] } };
		default:
			return state;
	}
};
