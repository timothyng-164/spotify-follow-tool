export function requestConfig(method, reqUrl, token) {
    return {
        method: 'get',
        url: reqUrl,
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }
    }
}