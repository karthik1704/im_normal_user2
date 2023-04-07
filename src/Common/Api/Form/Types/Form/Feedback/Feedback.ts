export interface IFeedbackFormData {
    name: string,
    parent_name:string,
    email: string,
    phone: string,
    course: string,
    remarks: string,

}

export interface IFeedbackFormRequest {
    name: string,
    parent_name:string,
    email: string,
    phone: string,
    course: string,
    remarks: string,

    formId: string,
}

export interface FeedbackFormValidationErrors {
    name: string[],
    parent_name:string[],
    email: string[],
    phone: string[],
    course: string[],
    remarks: string[],
}

export interface IFeedbackFormErrorResponse {
    detail: {
        validation_errors: FeedbackFormValidationErrors,
    }
    error_description?: string,
}

export interface IFeedbackForm {
    detail: {
        validation_errors: FeedbackFormValidationErrors
    }
    request_states: {
        post: {
            pending: boolean, fulfilled: boolean, rejected: boolean,
            error_description?: string, formId?: string | undefined,
        },
    },
    error_description?: string,
}