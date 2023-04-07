export interface IRequestFormData {
    name: string,
    email: string,
    phone: string,
    location: string,
    // program: string,
    // course: string
}

export interface IRequestFormRequest {
    name: string,
    email: string,
    phone: string,
    location: string,
    // program: string,
    // course: string,
    formId: string,
}

export interface RequestFormValidationErrors {
    name: string[],
    email: string[],
    phone: string[],
    location: string[],
    // program: string[],
    // course: string[],
}

export interface IRequestFormErrorResponse {
    detail: {
        validation_errors: RequestFormValidationErrors,
    }
    error_description?: string,
}

export interface IRequestForm {
    detail: {
        validation_errors: RequestFormValidationErrors
    }
    request_states: {
        post: {
            pending: boolean, fulfilled: boolean, rejected: boolean,
            error_description?: string, formId?: string | undefined,
        },
    },
    error_description?: string,
}