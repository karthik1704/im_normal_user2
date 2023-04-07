//COMMON
export interface IRequestState {
    pending: boolean, fulfilled: boolean, rejected: boolean, error_description?: string,
}
export interface ICourseBasicData {
    name: string,
}
export interface ICourseData extends ICourseBasicData { // returned by api
    url: string, id: number | null,
}
export interface ICourseValidationErrors {
    name: string[],
}
export interface ICourse extends ICourseData { // comment type in redux
    validation_errors?: ICourseValidationErrors, error_description?: string,
}
export interface ICourseList { 
    next: string, previous: string, results: ICourse[],
    validation_errors?: ICourseValidationErrors,
    error_description?: string,
    request_states: { get: IRequestState, post: IRequestState, patch: IRequestState, delete: IRequestState, }
}

// DELETE COURSE
export interface ICourseDeleteRequest { idInIndex: number, url: string }
export interface ICourseDeleteErrorResponse { idInIndex: number, error_description?: string }
export interface ICourseDeleteResponse { idInIndex: number }

// GET COURSE
export interface ICourseListRequest { url: string }
export interface ICourseListErrorResponse { error_description?: string }

// POST COURSE
export interface ICoursePostData extends ICourseBasicData {}
export interface ICourseErrorResponse { validation_errors?: ICourseValidationErrors, error_description?: string }


// PATCH COURSE
export interface ICoursePatchData {
    name?: string,
}
export interface ICoursePatchRequest extends ICoursePatchData { idInState: number, url: string }
export interface ICourseInListResponse extends ICourseData {
    // use this interface when passing response obj to builder (fulfilled)
    idInState: number,
}
export interface ICourseInListErrorResponse extends ICourseErrorResponse {
    // use this interface when passing response obj to builder (fulfilled)
    idInState: number
}