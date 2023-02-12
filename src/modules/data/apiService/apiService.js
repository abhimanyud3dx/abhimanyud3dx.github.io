export const serverMethod = (url,method,useSession,databody) => 
fetch(`${url}`, {
    method: method,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: databody ? JSON.stringify(databody) : null
}).then((response) => {
    if (!response.ok) {           
        throw new Error('No response from server');
    }
    return response.json();
}).then((result) => {
    return result;
});
