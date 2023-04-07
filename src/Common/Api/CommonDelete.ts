export async function deleteAsync(
    {url, cache, credentials}: {url: string, cache: RequestCache, credentials: RequestCredentials}
) {
    const DELETE_RESPONSE_CODE = 204;
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        cache: cache,
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: credentials,
    });

    let responseJson = (response.status === DELETE_RESPONSE_CODE)? undefined : {
        ...await response.json()
    };
    let responseStatus: number = response.status;
    return {
        responseJson: responseJson,
        responseStatus: responseStatus
    }
}