// export interface IBlogTitleImage {
//     url: string, image: string, thumbnail_100?: string, thumbnail_200?: string,
// }

import { IImage } from "../../ImageApi/Types";

export interface IBlogPostData {
    // title_image will be url of image object received from backend
    active: boolean, title: string, title_image: string, slug: string, content: string, publish_date: string, tags: string[]
}

export interface IBlogPatchData {
    // title_image will be url of image object received from backend
    active?: boolean, title?: string, title_image?: string, slug?: string, content?: string, publish_date?: string, tags?: string[]
}
export interface IBlogPatchRequest extends IBlogPatchData { url: string }

export interface IBlogRequest { url: string }
export interface IBlogData extends Omit<IBlogPostData, "title_image">{
    title_image: IImage,
    poster: { username: string }, url: string, id: number | null,
    short_content?: string,
}

export interface IBlogValidationErrors {
    active: string[], title: string[], title_image: string[], slug: string[],
    content: string[], publish_date: string[], poster: string[], url: string[],
    tags: string[],
}

export interface IRequestState {
    pending: boolean, fulfilled: boolean, rejected: boolean, error_description?: string, req_id?: string
}
export interface IBlog extends IBlogData {
    validation_errors: IBlogValidationErrors,
    request_states: { get: IRequestState }
}

export interface IBlogErrorResponse { validation_errors?: IBlogValidationErrors, error_description?: string }

export interface IBlogResponse { id: number, url: string, slug: string,  message: string }

export interface IBlogListErrorResponse { error_description?: string }
export interface IBlogListRequest { url: string, req_id: string }
export interface IBlogList { 
    next: string, previous: string, results: IBlogData[], request_states: { get: IRequestState }
}

// DELETE TAG
export interface IBlogDeleteRequest { url: string }
export interface IBlogDeleteErrorResponse { error_description?: string }
export interface IBlogDeleteResponse { }
