const post = async (url: string, data: any) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData);
    }

    return responseData;
}

export const requester =  { post };