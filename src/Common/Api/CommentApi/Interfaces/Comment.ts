//COMMON
export interface IRequestState {
    pending: boolean, fulfilled: boolean, rejected: boolean, error_description?: string,
}
export interface ICommentBasicData {
    poster: string, content: string, votes?: number, blog: string, reply_to?: string,
}
export interface ICommentData extends ICommentBasicData { // returned by api
    url: string, id: number | null,
}
export interface ICommentValidationErrors {
    poster: string[], content: string[], votes: string[], blog: string[], reply_to: string[],
}
export interface IComment extends ICommentData { // comment type in redux
    validation_errors?: ICommentValidationErrors, error_description?: string,
}
export interface ICommentList { 
    next: string, previous: string, results: IComment[],
    validation_errors?: ICommentValidationErrors,
    error_description?: string,
    request_states: { get: IRequestState, post: IRequestState, patch: IRequestState, delete: IRequestState}
}

// DELETE TAG
export interface ICommentDeleteRequest { idInIndex: number, url: string }
export interface ICommentDeleteErrorResponse { idInIndex: number, error_description?: string }
export interface ICommentDeleteResponse { idInIndex: number }

// GET COMMENT
export interface ICommentListRequest { url: string }
export interface ICommentListErrorResponse { error_description?: string }

// POST COMMENT
export interface ICommentPostData extends ICommentBasicData {}
export interface ICommentErrorResponse { validation_errors?: ICommentValidationErrors, error_description?: string }


// PATCH COMMENT
export interface ICommentPatchData {
    poster?: string, content?: string, votes?: number, blog?: string, reply_to?: string,
}
export interface ICommentPatchRequest extends ICommentPatchData { idInState: number, url: string }
export interface ICommentInListResponse extends ICommentData {
    // use this interface when passing response obj to builder (fulfilled)
    idInState: number,
}
export interface ICommentInListErrorResponse extends ICommentErrorResponse {
    // use this interface when passing response obj to builder (fulfilled)
    idInState: number
}