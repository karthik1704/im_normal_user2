import { IFeedbackFormData } from "../Types/Form/Form";
import { FORM_EMAIL_URL } from '../../../Globals';

export async function postFeedbackFormAsync(data: IFeedbackFormData, url = FORM_EMAIL_URL.feedback_email) {
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