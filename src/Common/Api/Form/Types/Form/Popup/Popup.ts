export interface IPopupFormRequest {
    name: string, email: string, phone: string,
}

export interface PopupFormValidationErrors {
    name: string[],
    email: string[],
    phone: string[],
}

export interface IPopupFormErrorResponse {
    detail: {
        validation_errors: PopupFormValidationErrors,
    }
    error_description: string,
}

export interface IPopupForm {
    detail: {
        validation_errors: PopupFormValidationErrors
    }
    request_states: {
        post: {
            pending: boolean, fulfilled: boolean, rejected: boolean,
            error_description: string,
        },
    },
    error_description: string,
}