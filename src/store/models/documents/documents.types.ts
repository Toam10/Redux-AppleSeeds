export interface I_Document {
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

export interface Action<T> {
	data: T;
}

export interface I_State {
	documents: I_Document[];
}

export interface I_FetchDocumentsRequestData {
	documents: I_Document[];
}

export interface I_SetDocumentData {
	document: I_Document;
}

export interface I_DocumentsState extends AsyncAction<I_State> {}

export const FETCH_DOCUMENTS_REQUEST = "FETCH_DOCUMENTS_REQUEST";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAILED = "FETCH_DOCUMENTS_FAILED";
export const SET_DOCUMENTS = "SET_DOCUMENTS";

export interface I_FetchDocumentsRequest extends AsyncAction<I_FetchDocumentsRequestData> {
	type: typeof FETCH_DOCUMENTS_REQUEST;
}
export interface I_FetchDocumentSuccess extends AsyncAction<I_FetchDocumentsRequestData> {
	type: typeof FETCH_DOCUMENTS_SUCCESS;
}
export interface I_FetchDocumentsFailed extends AsyncAction<I_FetchDocumentsRequestData> {
	type: typeof FETCH_DOCUMENTS_FAILED;
}
export interface I_SetDocument extends Action<I_SetDocumentData> {
	type: typeof SET_DOCUMENTS;
}

export type DocumentsActionsTypes =
	| I_FetchDocumentsRequest
	| I_FetchDocumentSuccess
	| I_FetchDocumentsFailed
	| I_SetDocument;
