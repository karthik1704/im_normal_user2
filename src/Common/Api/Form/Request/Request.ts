import { IRequestFormData } from "../Types/Form/Form";
import { FORM_EMAIL_URL } from '../../../Globals';

export async function postRequestFormAsync(data: IRequestFormData, url = FORM_EMAIL_URL.request_email) {
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