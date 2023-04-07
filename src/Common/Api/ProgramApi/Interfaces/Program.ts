//COMMON
export interface IRequestState {
    pending: boolean, fulfilled: boolean, rejected: boolean, error_description?: string,
}
export interface IProgramBasicData {
    name: string,
}
export interface IProgramData extends IProgramBasicData { // returned by api
    url: string, id: number | null,
}
export interface IProgramValidationErrors {
    name: string[],
}
export interface IProgram extends IProgramData { // comment type in redux
    validation_errors?: IProgramValidationErrors, error_description?: string,
}
export interface IProgramList { 
    next: string, previous: string, results: IProgram[],
    validation_errors?: IProgramValidationErrors,
    error_description?: string,
    request_states: { get: IRequestState, post: IRequestState, patch: IRequestState, delete: IRequestState, }
}

// DELETE PROGRAM
export interface IProgramDeleteRequest { idInIndex: number, url: string }
export interface IProgramDeleteErrorResponse { idInIndex: number, error_description?: string }
export interface IProgramDeleteResponse { idInIndex: number }

// GET PROGRAM
export interface IProgramListRequest { url: string }
export interface IProgramListErrorResponse { error_description?: string }

// POST PROGRAM
export interface IProgramPostData extends IProgramBasicData {}
export interface IProgramErrorResponse { validation_errors?: IProgramValidationErrors, error_description?: string }


// PATCH PROGRAM
export interface IProgramPatchData {
    name?: string,
}
export interface IProgramPatchRequest extends IProgramPatchData { idInState: number, url: string }
export interface IProgramInListResponse extends IProgramData {
    // use this interface when passing response obj to builder (fulfilled)
    idInState: number,
}
export interface IProgramInListErrorResponse extends IProgramErrorResponse {
    // use this interface when passing response obj to builder (fulfilled)
    idInState: number
}