//the handle response and handle error functions are created here to catch any errors between the server and the frontend

export async function handleResponse(response) {
    if (response.ok) {
        const _response = await response.json();
        const data = _response.data;
        return data;
    }
    if (response.status === 400) {
        const error = await response.text();
        throw new Error('Network response was not ok');
    }
}

export function handleError(error) {
    console.error('Api call failed' + error);
    throw error;
}
