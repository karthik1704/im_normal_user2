import { COURSE_URL } from "../../Globals";
import { ICoursePatchData, ICoursePostData } from "./Interfaces/Course";

export async function postCourseAsyc(data: ICoursePostData, url = COURSE_URL["URL"]) {
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

export async function patchCourseAsyc(data: ICoursePatchData, url: string) {
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