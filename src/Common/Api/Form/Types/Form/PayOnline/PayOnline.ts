export interface IPayOnlineFormData {
    firstName: string,
    lastName:string,
    email: string,
    phone: string,
    course: string,
    amount: string,
    address: string,

}

export interface IPayOnlineFormRequest {
    firstName: string,
    lastName:string,
    email: string,
    phone: string,
    course: string,
    amount: string,
    address: string,

    formId: string,
}

export interface PayOnlineFormValidationErrors {
    firstName: string[],
    lastName:string[],
    email: string[],
    phone: string[],
    course: string[],
    amount: string[],
    address: string[],
}

export interface IPayOnlineFormErrorResponse {
    detail: {
        validation_errors: PayOnlineFormValidationErrors,
    }
    error_description?: string,
}

export interface IPayOnlineForm {
    detail: {
        validation_errors: PayOnlineFormValidationErrors
    }
    request_states: {
        post: {
            pending: boolean, fulfilled: boolean, rejected: boolean,
            error_description?: string, formId?: string | undefined,
        },
    },
    error_description?: string,
}