export async function getAsync(
    {url, cache, credentials}: {url: string, cache: RequestCache, credentials: RequestCredentials}
) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: cache,
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: credentials,
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