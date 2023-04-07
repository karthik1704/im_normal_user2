import { PROGRAM_URL } from "../../Globals";
import { IProgramPatchData, IProgramPostData } from "./Interfaces/Program";

export async function postProgramAsyc(data: IProgramPostData, url = PROGRAM_URL["URL"]) {
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

export async function patchProgramAsyc(data: IProgramPatchData, url: string) {
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