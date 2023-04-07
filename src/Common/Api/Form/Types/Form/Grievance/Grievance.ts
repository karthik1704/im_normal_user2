export interface IGrievanceFormData {
    name: string,
    parent_name:string,
    email: string,
    phone: string,
    nature_of_grievance: string,
    message: string,

}

export interface IGrievanceFormRequest {
    name: string,
    parent_name:string,
    email: string,
    phone: string,
    nature_of_grievance: string,
    message: string,

    formId: string,
}

export interface GrievanceFormValidationErrors {
    name: string[],
    parent_name:string[],
    email: string[],
    phone: string[],
    nature_of_grievance: string[],
    message: string[],
}

export interface IGrievanceFormErrorResponse {
    detail: {
        validation_errors: GrievanceFormValidationErrors,
    }
    error_description?: string,
}

export interface IGrievanceForm {
    detail: {
        validation_errors: GrievanceFormValidationErrors
    }
    request_states: {
        post: {
            pending: boolean, fulfilled: boolean, rejected: boolean,
            error_description?: string, formId?: string | undefined,
        },
    },
    error_description?: string,
}