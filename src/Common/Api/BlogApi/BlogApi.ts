import { BLOG_FILTER_URL } from "../../Globals";
import { IBlogPatchData, IBlogPostData } from "./Interfaces/Blog";

export async function postBlogAsyc(data: IBlogPostData, url = BLOG_FILTER_URL) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });
    let responseJson = {
        ...await response.json()
    };
    let responseStatus: number = response.status;
    return {
        responseJson: responseJson,
        responseStatus: responseStatus
    }
}

export async function patchBlogAsyc(data: IBlogPatchData, url: string) {
    const response = await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });
    let responseJson = {
        ...await response.json()
    };
    let responseStatus: number = response.status;
    return {
        responseJson: responseJson,
        responseStatus: responseStatus
    }
}