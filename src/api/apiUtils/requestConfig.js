export function requestConfig(method, reqUrl, token) {
    return {
        method: method,
        url: reqUrl,
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }
    }
}