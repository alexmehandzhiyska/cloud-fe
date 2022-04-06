const post = async (url: string, data?: any, token?: string) => {
    const tokenHeader: string = token ? `Token ${token}` : null;
        
    const requestBody = data ? JSON.stringify(data) : null;

    const response = await fetch(url, {
        method: 'POST',
        body: requestBody,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tokenHeader
        }
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    try {
        const responseData = await response.json();
        return responseData;
    } catch(err) {
        return 'success';
    }
}

const get = async (url: string, token?: string) => {
    const tokenHeader: string = token ? `Token ${token}` : null;

    const response = await fetch(url, {
        headers: {
            'Authorization': tokenHeader
        }
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData);
    }

    return responseData;
}

export const requester =  { get, post };