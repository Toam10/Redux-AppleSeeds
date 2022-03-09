import { Dispatch } from "redux";
import {
	DocumentsActionsTypes,
	FETCH_DOCUMENTS_FAILED,
	FETCH_DOCUMENTS_REQUEST,
	FETCH_DOCUMENTS_SUCCESS,
	I_Document,
	I_SetDocument,
	SET_DOCUMENTS,
} from "./documents.types";

export const getDocumentsRequest = (): DocumentsActionsTypes => ({
	type: FETCH_DOCUMENTS_REQUEST,
	error: "",
	loading: true,
	data: {
		documents: [] as I_Document[],
	},
});
export const getDocumentsSuccess = (documents: I_Document[]): DocumentsActionsTypes => ({
	type: FETCH_DOCUMENTS_SUCCESS,
	error: "",
	loading: false,
	data: {
		documents,
	},
});
export const getDocumentsFailed = (): DocumentsActionsTypes => ({
	type: FETCH_DOCUMENTS_FAILED,
	error: "Unable To Fetch Document From The Server",
	loading: false,
	data: {
		documents: [] as I_Document[],
	},
});

export const boundGetDocumentsRequests = () => {
	return async (dispatch: Dispatch<DocumentsActionsTypes>) => {
		dispatch(getDocumentsRequest());
		try {
			const URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";
			const documents: I_Document[] = await (await fetch(URL)).json();
			dispatch(getDocumentsSuccess(documents));
		} catch (error) {
			dispatch(getDocumentsFailed());
		}
	};
};

export const setDocument = (document: I_Document): DocumentsActionsTypes => ({
	type: SET_DOCUMENTS,
	data: {
		document,
	},
});
