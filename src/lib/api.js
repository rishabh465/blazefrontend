export const api = {
    async fetch(endpoint, options = {}) {
        try {
            const response = await fetch(endpoint, {
                ...options,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });

            const contentType = response.headers.get('content-type');
            const isJson = contentType && contentType.includes('application/json');

            if (!response.ok) {
                if (isJson) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Something went wrong');
                } else {
                    const textError = await response.text();
                    throw new Error(textError || 'Something went wrong');
                }
            }

            if (isJson) {
                return await response.json();
            } else {
                return await response.text();
            }
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
}; 