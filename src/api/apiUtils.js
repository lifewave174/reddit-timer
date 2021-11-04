//the handle response and handle error functions are created here to catch any errors between the server and the frontend

export async function handleResponse(response) {
    if (response.ok) {
        const data = await response.json();
        const _topPosts = data.data.children;
        return _topPosts;
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
